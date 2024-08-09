import { EventCode } from "../Enum/EventCode";

export interface IEvent {
	Id: string;
	EventCode: EventCode;
	EventTime:Date;
	ParentId:string;
	ParentTable:string;
}
