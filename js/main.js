$(function () {
  // 動作１：ハンバーガーボタンをクリック
  $(".js-burger-btn").on("click", function () {
    // openクラスの付け外しによるハンバーガーボタンの変化
    $(".js-burger-btn-line").toggleClass("open");
    // ハンバーガーメニューの表示/非表示
    $(".js-burger-menu").fadeToggle(300);
  });
  // 動作２：ハンバーガーメニューの項目をクリック
  $(".js-burger-menu p").on("click", function () {
    // ハンバーガーメニューを非表示
    $(".js-burger-menu").fadeOut(300);
    // openクラスの付け外しによるハンバーガーボタンの変化
    $(".js-burger-btn-line").toggleClass("open");
  });
  // ハンバーガーメニューの申込ボタンをクリック
  $(".js-burger-menu div").on("click", function () {
    // ハンバーガーメニューを非表示
    $(".js-burger-menu").fadeOut(300);
    // openクラスの付け外しによるハンバーガーボタンの変化
    $(".js-burger-btn-line").toggleClass("open");
  });

  // 左からスライドイン
  $(".js-reason-item-left").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("slideIn");
      }
    }
  );

  // 右からスライドイン
  $(".js-reason-item-right").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("slideIn");
      }
    }
  );

  // ふわっと出現
  $(".voice-student").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("fadeIn");
      }
    }
  );
});
