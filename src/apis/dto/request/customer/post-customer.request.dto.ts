//# 고객 등록 요청 데이터 전달 객체 정의

// interface: post customer request body dto //
export default interface PostCustomerRequestDto {
    profileImage: string;
    name: string;
    birth: string;
    charger: string;
    address: string;
    location: string;
}