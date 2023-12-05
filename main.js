console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");

	// ガソリン代を計算する
	$("#btn_calc").click(()=>{
		console.log("計算開始!!");
		
		//入力フォームから

		//ガソリン価格
		const strA = $("#input_a").val();
		console.log("strA:", strA);

		//もし、strAが空文字だったら
		if (strA === "") {
			console.log("strAは空文字です");
			$("#msg_info").text("ガソリン価格を入力してください");
			return;  //ここで停止
		}

		//走行距離
		const strB = $("#input_b").val();
		console.log("strB:", strB);
		
		//もし、strBが空文字だったら
		if (strB === "") {
			console.log("strBは空文字です");
			$("#msg_info").text("走行距離を入力してください");
			return;
		}
		
		//車の燃費
		const strC = $("#input_c").val();
		console.log("strC:", strC);
		
		//もし、strBが空文字だったら
		if (strC === "") {
			console.log("strCは空文字です");
			$("#msg_info").text("車の燃費を入力してください");
			return;
		}

		//ここまで来たら、空文字なし
		console.log("全データ入力完了:", strA, "-", strB, "-", strC, ":",);

		//文字から数値に変換
		const numA = parseInt(strA);

		//数値かどうか、確認
		if(Number.isInteger(numA) === false) {  //numAは数字じゃない
			console.log("numAは数値ではありません");
			$("#msg_info").text("ガソリン価格に数値を入力してください");
			return;
		}

		const numB = parseInt(strB);

		//数値かどうか、確認
		if(Number.isInteger(numB) === false) {  //numAは数字じゃない
			console.log("numBは数値ではありません");
			$("#msg_info").text("走行距離に数値を入力してください");
			return;
		}

		const numC = parseInt(strC);

		//数値かどうか、確認
		if(Number.isInteger(numC) === false) {  //numAは数字じゃない
			console.log("numCは数値ではありません");
			$("#msg_info").text("車の燃費に数値を入力してください");
			return;
		}

		//データはすべて数値です
		console.log("計算する");

		if(Number.isInteger(numA) === true){
			if(Number.isInteger(numC) === true){
				if(Number.isInteger(numC) === true){
					console.log("データが正しく入力されています");
					$("#msg_info").text("計算結果");

					//ガソリン代を計算する
					const gasCost = numA * numB / numC;
					console.log("ガソリン代計算結果,gasCost:", gasCost);
					$("#msg_result").text(gasCost);

					return;
				}
			}
		}
	});
});