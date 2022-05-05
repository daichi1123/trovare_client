export const RequestContent: React.VFC = () => {
  return (
    <>
      <br />
      <span
        className="content-title"
        style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "8px" }}
      >
        レストランの追加には、管理者の許可が必要です
      </span>
      <span
        className="content-body"
        style={{
          color: "rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          marginTop: "8px",
          fontSize: "8px",
        }}
      >
        登録申請後、あなたのメールアドレス先に登録用URLを送らせていただきます。
      </span>
    </>
  );
};
