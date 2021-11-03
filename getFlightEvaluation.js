(function () {
    "use strict";

    kintone.events.on('app.record.create.show', function(event) {
        //フィールドを編集不可にする
        event.record.対象フライト.disabled = true;
        event.record.ユーザー.disabled = true;
        
        //ログインユーザー名を取得
        const studentName = event.record.ユーザー.value[0].name
        //window.alert(studentName);    //デバッグ用

        //過去2年間のログインユーザーのログの有無を調べる
        // リクエストパラメータ
        const body = {
            "app": 8,
            "id": 4367,
        };
        
        kintone.api(
            kintone.api.url('/k/v1/record.json', true),
            'GET',
            body,
            function(resp) {
                // success:レコード番号を表示する
                //alert(resp.record.$id.value);
                alert(resp.record.前席.value[0].name);
          }, function(resp) {
                // error:エラーの場合はメッセージを表示する
                const errmsg = 'レコード取得時にエラーが発生しました。';
                // レスポンスにエラーメッセージが含まれる場合はメッセージを表示する
                if (resp.message !== undefined) {
                errmsg += '\n' + resp.message;
            }
            //alert(errmsg);
            alert(resp.record.$id.value);
          }
        );

/*
        kintone.api(
        kintone.api.url('/k/v1/record', true), // pathOrUrl
        'GET', // method
        body, // params
        function(resp) { // 成功時のcallback
            alert('recordId:' + resp.record.$id.value);
        }
        );

        
        let logValue = (REST API？);

        while (traineeName !== ){
            logValue = (REST API？);
        }

        if ログインユーザーのレコードが存在しない場合{
            event.record.対象フライト.value = 1;
            const firstFlightDate = 初回フライト日を取得
            
            発行記録のfirstFlightDateから第一発目のフライト情報を取得

        }else{

        }
        */



        /*

        */

        

        //ボタン
        const getEvaluationButton = document.createElement('button');
        getEvaluationButton.id='get_evaluation';
        getEvaluationButton.innerText ='取得';
        getEvaluationButton.onclick = function () {
            /*
            if 初回の場合{

            }else{

            }

            */
        }
        kintone.app.record.getSpaceElement('get_evaluation').appendChild(getEvaluationButton);
        
        return event;
    });
})();

    /*
    function getLogFromHakkoukiroku(a, b, c, d){

    }
    */