import { SignInUser } from "src/types";
import { create } from "zustand";

interface SignInUserStore {

    signInUser: SignInUser | null;
    setSignInUser: (signInUser: SignInUser | null) => void;

}

// 객체 반환 () 소괄호 사용
const useStore = create<SignInUserStore>(set => ({
    signInUser: null,
    setSignInUser: (signInUser: SignInUser | null) => set(state => ({ ...state, signInUser }))
}));

export default useStore;