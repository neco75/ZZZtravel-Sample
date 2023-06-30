liff.init({ liffId: "1661538770-xk5WO48E" }).then(() => {
  if (!liff.isLoggedIn()) {
    liff.login();
  } else {
    document.getElementById("title").textContent = "ログイン済み";
  }

  if (liff.isLoggedIn()) {
    const user = {
      name: "",
      userId: "",
      pictureURL: "",
      statusMessage: "",
      accessToken: liff.getAccessToken(),
    };
    // プロフィール取得
    liff
      .getProfile()
      .then((profile) => {
        user.name = profile.displayName;
        user.userId = profile.userId;
        user.pictureUrl = profile.pictureUrl;
        user.statusMessage = profile.statusMessage;
        document.getElementById("name").textContent = user.name;
        document.getElementById("userId").textContent = user.userId;
        document.getElementById("pictureUrl").textContent = user.pictureUrl;
        document.getElementById("statusMessage").textContent =
          user.statusMessage;
        document.getElementById("accessToken").textContent = user.accessToken;
        document.getElementById(
          "icon"
        ).innerHTML = `<img src="${user.pictureUrl}" width="100px" height="100px">`;
      })
      .catch((err) => {
        console.log("error", err);
      });
  } else {
    document.getElementById("name").textContent = "ログインしてください";
  }
});
