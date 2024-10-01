import ResponseDto from "../response.dto";

//# 요양사 정보를 전달하는 데이터 객체

// interface: get nurse response body dto //
export default interface GetNurseResponseDto extends ResponseDto {
    userId: string;
    name: string;
    telNumber: string;
}