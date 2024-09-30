//# 관리 기록 작성을 위한 데이터 전달 객체 정의

// interface: post care record request body dto //
export default interface PostCareRecordRequestDto {
    contents: string;
    usedToolNumber: number | null;
    count: number | null;
}