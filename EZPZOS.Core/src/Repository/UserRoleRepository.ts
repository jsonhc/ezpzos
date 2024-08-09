import { UniqueIdentifier } from "mssql";
import { LogLevel } from "../Common/Constants";
import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { IUserRole } from "../Interface/IUserRole";
import { RoleRepository } from "./RoleRepository";
import { Role } from "../Domain/Role";
import { IDataObject } from "../Interface/IDataObject";
import { UserRole } from "../Domain/UserRole";

export class UserRoleRepository extends BaseRepository implements IRepository {
	//#region Implementation
	//TODO Update, Insert, Delete

	public async GetUserRolesByUserId(
		id: string,
		callback: (result: boolean, userRoles: IUserRole[] | null | undefined) => void
	) {
		this.Logger.Log("GetUserRoleByUserId", "Getting UserRole By UserId", LogLevel.DEBUG);

		// Validate input dataobject

		// Preparing insert query
		let query = `Select * from [dbo].[UserRole] Where [UserId] = @Id`;

		// Execute Query with parameters
		await this.Execute(
			query,
			{ Id: id },
			preparedStatement => {
				return preparedStatement.input("Id", UniqueIdentifier);
			},
			async (err, result) => {
				if (err) {
					this.Logger.Log(
						"GetUserRoleByUserId",
						`Error Getting UserRole By UserId: ${id}
							Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
				} else {
					// If one or more rows affect, userroles gotten
					if (result?.rowsAffected[0] && result?.rowsAffected[0] > 0 && result.recordsets[0].length > 0) {
						this.Logger.Log("GetUserRoleByUserId", `UserRole Found.`, LogLevel.DEBUG);
						let userRoles: IUserRole[] = [];
						for (let userRole of result.recordsets[0] as IUserRole[]) {
							// Get Role for each UserRole
							userRole.Role =
								(await new RoleRepository().GetRoleByRoleIdPromise(userRole.RoleId)) ?? new Role();
							userRoles.push(userRole);
						}

						this.Logger.Log(
							"GetUserRoleByUserId",
							`UserRoles gotten: ${JSON.stringify(userRoles)}`,
							LogLevel.DEBUG
						);
						callback(true, userRoles);
					} else {
						this.Logger.Log(
							"GetUserRoleByUserId",
							`Error UserRole User By UserId: ${id}.
								Result: ${JSON.stringify(result)}`,
							LogLevel.ERROR
						);
						callback(false, undefined);
					}
				}
			}
		);
	}

	public async GetUserRolesByUserIdPromise(id: string): Promise<IUserRole[] | undefined> {
		this.Logger.Log("GetUserRolesByUserIdPromise", "Getting UserRole By UserId", LogLevel.DEBUG);

		// Validate input dataobject

		// Preparing insert query
		let query = `Select * from [dbo].[UserRole] Where [UserId] = @Id`;

		this.Logger.Log("GetUserRolesByUserIdPromise", `Execuring Query`, LogLevel.DEBUG);

		// Execute Query with parameters
		let result = await this.ExecutePromise(query, { Id: id }, preparedStatement => {
			return preparedStatement.input("Id", UniqueIdentifier);
		});

		// If one or more rows affect, userroles gotten
		if (result?.rowsAffected[0] && result?.rowsAffected[0] > 0 && result.recordsets[0].length > 0) {
			this.Logger.Log("GetUserRoleByUserId", `UserRole Found.`, LogLevel.DEBUG);
			let userRoles: IUserRole[] = [];
			for (let userRole of result.recordsets[0] as IUserRole[]) {
				// Get Role for each UserRole
				userRole.Role = (await new RoleRepository().GetRoleByRoleIdPromise(userRole.RoleId)) ?? new Role();
				userRoles.push(userRole);
			}

			this.Logger.Log("GetUserRoleByUserId", `UserRoles gotten: ${JSON.stringify(userRoles)}`, LogLevel.DEBUG);
			return userRoles;
		} else {
			this.Logger.Log(
				"GetUserRolesByUserIdPromise",
				`Error UserRole User By UserId: ${id}.
								Result: ${JSON.stringify(result)}`,
				LogLevel.ERROR
			);
		}
		return undefined;
	}
	//#endregion
}
