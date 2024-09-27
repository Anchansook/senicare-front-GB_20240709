import ResponseDto from "../response.dto";

//# 해당되는 고객의 정보를 응답하기 위한 데이터 객체

// interface: get customer response body dto //
export default interface GetCustomerResponseDto extends ResponseDto {
    customerNumber: number;
    profileImage: string;
    name: string;
    birth: string;
    chargerName: string;
    chargerId: string;
    address: string;
}