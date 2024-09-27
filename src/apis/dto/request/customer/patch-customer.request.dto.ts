//# 고객 수정 요청 데이터 전달 객체 정의

// interface: patch customer request body dto //
export default interface PatchCustomerRequestDto {
    profileImage: string;
    name: string;
    birth: string;
    charger: string;
    address: string;
    location: string;
}