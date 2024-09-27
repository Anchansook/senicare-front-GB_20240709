//# 관리 기록 리스트 객체 정의

export default interface CareRecord {
    recordNumber: number;
    recordDate: string;
    contents: string;
    usedToolName: string | null;
    count: number | null;
}