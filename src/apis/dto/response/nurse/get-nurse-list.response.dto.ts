//# 요양사 리스트 전달할 데이터 객체 정의

import { Nurse } from "src/types";
import ResponseDto from "../response.dto";

// interface: get nurse list response body dto //
export default interface GetNurseListResponseDto extends ResponseDto {
    nurses: Nurse[];
}