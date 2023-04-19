import { APIApplication, ApplicationFlags } from "discord-api-types/v10";
import { Id } from "./id";
import { id } from "./common";
import { From1 } from "../types/parseable";
export interface RawApplicationRoleConnectionMetadata {
  type: ApplicationRoleConnectionMetadataType;
}
export enum ApplicationRoleConnectionMetadataType {
  IntegerLessThanOrEqual = 1,
  IntegerGreaterThanOrEqual,
  IntegerEqual,
  IntegerNotEqual,
  DatetimeLessThanOrEqual,
  DatetimeGreaterThanOrEqual,
  BooleanEqual,
  BooleanNotEqual,
}
/**
  * Turn all fields into camelCase and make all nullable types into Option
  *
  */
 
export interface CoreApplication  {
    id: Id;
    flags: ApplicationFlags
}

interface ReadyPartialApplication {
    id: string,
    flags: number

}
function from(r: ReadyPartialApplication) : CoreApplication {
    return {
        id: id(r),
        flags: r.flags,
    }

}


export const Parseable : From1<APIApplication, CoreApplication> = {
    from
}


