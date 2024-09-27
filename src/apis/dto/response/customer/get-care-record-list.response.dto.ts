import { CareRecord } from "src/types";
import ResponseDto from "../response.dto";

//# 관리 기록 리스트를 응답하기 위한 데이터 전달 객체

// interface: get care record response body dto //
export default interface GetCareRecordResponseDto extends ResponseDto {
    careRecords: CareRecord[];
}