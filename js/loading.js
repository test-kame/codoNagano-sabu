$(function () {
    function end_loading() {
      // ページ読み込み完了後フェードアウトする時間
      $('.loading').fadeOut(2000);
    }
    $(window).on('load', function () {
      // ページ読み込み完了時にend_loading()を実行
      if ($('body').attr('data-loaded') === 'true') {
        end_loading();
      } else {
        $(window).on('pageshow', function () {
          end_loading();
        });
      }
    });
  
    // ページ読み込み完了時にdata属性を追加
    $(document).ready(function () {
      $('body').attr('data-loaded', 'true');
    });
  });