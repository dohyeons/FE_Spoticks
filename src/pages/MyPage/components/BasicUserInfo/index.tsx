import BasicUserInfoForm from "@/pages/MyPage/components/BasicUserInfo/BasicUserInfoForm";
import LinkButton from "@/common/components/atoms/button/LinkButton";

export default function BasicUserInfo() {
  return (
    <section>
      <div className="flex w-64 flex-col">
        <div className="mb-4 flex justify-between border-b border-borders text-sm">
          <h2>기본 정보</h2>
          {/** 여기서 아이디, 이메일, 이름, 전화번호 불러오기 */}
          <LinkButton
            content="탈퇴하기"
            linkTo="/profile/account-deletion"
            style="text-borders hover:text-Accent"
          />
        </div>
        <BasicUserInfoForm />
      </div>
    </section>
  );
}