/* eslint=disable */ 
import React, {useEffect, useState} from 'react';
import './Detail.scss';
import {connect, useSelector} from 'react-redux';


function ThemaDetail() {
	let state= useSelector((state)=>state);

	let aDays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	let selectDate = state.selectday;
	let sYear = "";
	let sMonth = "";
	let sDate = "";
	let sDay = "";
	let sSelectDate = "";
	let sSelectDay = "";
	


	if(selectDate){
		sYear = selectDate.getFullYear();
		sMonth = selectDate.getMonth() + 1;
		if(sMonth < 10){
			sMonth = "0" + sMonth;
		}
		sDate = selectDate.getDate();
		if(sDate < 10){
			sDate = "0" + sDate;
		}
		sDay = selectDate.getDay();
		sSelectDate = sYear+"-"+sMonth+"-"+sDate;
		sSelectDay = aDays[sDay];
	}


  return (
    <div className="container">
      <div className="wrap">
    <div className="contents">
			<h4>예약하기</h4>

			{/* <div className="process MB50"><img src="./img/step_img02.jpg" alt="예약정보입력"/></div> */}

			<script language="JavaScript" src="script/util.js"></script>
			<script language="JavaScript" src="script/check_buy.js"></script>
			<form name="check_buy" method="post" action="" target="toplog_act">
				<input type="hidden" name="doing" value="insert"/>
				<input type="hidden" name="productno" value="58"/>
				<input type="hidden" name="derv_date" value="2022-07-05"/>
				<input type="hidden" name="derv_time" value="13:10"/>
				<table cellspacing="0" cellpadding="0" className="themeTable" summary="예약정보 입력테이블">
					<caption>예약정보 입력테이블</caption>
					<colgroup>
						<col width="20%"/><col width="80%"/>
					</colgroup>
					<tbody>
						<tr>
							<th>지점</th>
							<td><b className="F20 red">{state.thema.location}</b> <p className="PT10">※ 매장을 혼동하는 경우가 많습니다. 지점확인 꼭 부탁드립니다.</p></td>
						</tr>
						<tr>
							<th>테마 (Room)</th>
							<td>{state.thema.title}</td>
						</tr>
						<tr>
							<th>예약일 (Date)</th>
							<td>{sSelectDate + " " + sSelectDay}</td>
						</tr>
						<tr>
							<th>예약시간</th>
							<td>{state.times.time}</td>
						</tr>
						<tr>
							<th>게임시간</th>
							<td>{state.thema.playTime}</td>
						</tr>
						<input type="hidden" name="booking_num" value="1"/>
						<input type="hidden" name="next_time" value=""/>

						<tr>
							<th>인원 (Players)</th>
							<td>
								<select name="players" id="players" className="select" style={{width:"310px"}} title="인원을 입력하세요" onchange="Cost_Ch(this.form);">
									<option value="1:50000">1 명 (50,000원)</option>
									<option value="2:50000">2 명 (50,000원)</option>
									<option value="3:69000">3 명 (69,000원)</option>
									<option value="4:84000">4 명 (84,000원)</option>
									<option value="5:100000">5 명 (100,000원)</option>
									<option value="6:114000">6 명 (114,000원)</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>예약자</th>
							<td>
								<input type="text" name="o_name" id="o_name" value="" maxlength="20" className="inputType" style={{width:"300px"}} title="예약자명을 입력하세요"/>
							</td>
						</tr>
						<tr>
							<th>연락처</th>
							<td>
								<select name="o_hand_ph01" className="select" style={{width:"90px"}}>
									<option value="">통신회사</option>
									<option value="010">010</option>
									<option value="011">011</option>
									<option value="016">016</option>
									<option value="017">017</option>
									<option value="018">018</option>
									<option value="019">019</option>
								</select> -
								<input type="text" name="o_hand_ph02" value="" className="inputType" style={{width:"86px"}} maxlength="4" onkeyup="numOnly(this,document.o_hand_ph02,false);"/>
								<input type="text" name="o_hand_ph03" value="" className="inputType" style={{width:"86px"}} maxlength="4" onkeyup="numOnly(this,document.o_hand_ph03,false);"/>
							</td>
						</tr>
						<tr>
							<th>참가요금</th>
							<td className="price" id="tprice">
                <span id="totalcost_text">50,000원</span> <span className="info_m">[예약금 : 2만원]</span>
              </td>
						</tr>
						<tr>
							<th>결제방식 선택</th>
							<td>
								<label><input type="radio" name="paytype" value="1" checked="checked"/> 현장결제</label>
							</td>
						</tr>
						<tr>
							<th>예약 비밀번호</th>
							<td>
								<input type="text" name="passwd" id="passwd" value="" maxlength="10" className="inputType" style={{width:"300px"}} title="비밀번호를 입력하세요"/>
							</td>
						</tr>
						<tr>
							<th>전달메세지</th>
							<td>
								<input type="text" name="comment" id="comment" value="" maxlength="100" className="inputType" style={{width:"600px"}} title="전달메세지를 입력하세요"/>
							</td>
						</tr>
					</tbody>
				</table>

				<ul className="caution_Text">
					<li><span className="acc_info co1">※ 210702-04-393495 [국민은행] / 예금주: 송준호</span> <span className="m_info co1">&nbsp;-&nbsp; 예약금 : 2만원</span></li>
					<li>※ 예약금은 <span style={{color:"#2585f3", fontSize:"inherit"}}>주말 및 공휴일</span>에만 받습니다.</li>
					<li>※ 당일 취소시에는 선결제액 환불이 되지 않으니 주의바랍니다. </li>
					<li>※ 예약금만 선결제 하신 경우에는, 현장에서 선결제하신 예약금을 제외한 차액만 추가 결제하시면 됩니다.</li>
					<li>※ 음주시 이용제한이 될 수 있으니 양해부탁드립니다.</li>
				</ul>

				<div className="privacy_Div">
					<p>개인정보 수집, 이용 및 제공 등에 관한 고지사항</p>
					<p>이용자 본인은 아래의 개인정보가 사실임을 확인하며, 아래와 같이 개인정보를 수집 및 이용하는 것에 동의합니다.</p>
					<p>[개인정보의 수집 및 이용목적]</p>
					<p>- 비회원 예매서비스 제공</p>
					<p>- 예약 정보를 확인 및 관리하고, 필요 시 예약 이행 여부 확인을 위해 예약자에게 연락을 취할 목적 등</p>
					<p>[수집하는 개인정보의 항목]</p>
					<p>- 필수입력사항 : 이용자의 식별을 위한 정보</p>
					<p>- 입력정보 : 이름, 휴대폰번호, 이메일 주소</p>
					<p>[개인정보의 보유 및 이용기간]</p>
					<p>개인정보의 수집목적 또는 제공 받은 목적이 달성되면 즉시 파기합니다. 다만, 상법 등 관련 법령의 규정에 의하여 거래관련 관리 의무 관계의 확인 등을 이유로 대금결제및재화들 의공급에관한기록에 의거 5년간 보유합니다.</p>
					<p>* 개인 정보 제공에 동의하지 않을 권리가 있으며 개인 정보 제공에 동의하지 않을 경우 비회원 서비스는 제공되지 않습니다.</p>
					<p>&nbsp;</p>
					<p><br/>
					[기술적/관리적 보호대책]</p>
					<p>- 비밀의 화원은 서버 및 네트워크 관련 보안시스템을 갖추고 있습니다. 방화벽 등 해킹 등 외부침입에 대비하여 각 서버마다 침입차단시스템 및 취약점 분석시스템 등을 갖추어 ‘이용자’가 제공한 개인정보보호에 만전을 기하고 있습니다. 개인 정보 취급직원 최소화는 물론 각 직원별 개인정보 접근권한을 달리하고, 수시보안교육을 통해 본 방침의 준수를 강조하고 있습니다. </p>
					<p>- 비밀의 화원은 “이용자” 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다.</p>
					<p>- 그 외 내부 관리자의 실수나 기술관리 상의 사고로 인해 개인정보의 상실, 유출, 변조, 훼손이 유발될 경우 비밀의 화원은 즉각“이용자”에게 사실을 알리고 적절한 대책과 보상을 강구할 것입니다.<br/>
					</p>
				</div>

				<p className="privacy">
					<span><input type="radio" name="privacy" id="privacy01" value="Y" title="개인정보취급방침에 동의시 체크하세요"/> <label for="privacy01">개인정보처리방침에 동의함</label></span>
					&nbsp;&nbsp;&nbsp;
					<span><input type="radio" name="privacy" id="privacy02" value="N" title="개인정보취급방침에 동의시 체크하세요"/> <label for="privacy02">동의하지 않음</label></span>
				</p>

				<div className="btn_C273_Area">
					<a href="reservation.html" className="btnStyle cancel">취소</a>
					<button type="button" className="buttonType reserve">예약하기</button>
				</div>
			</form>
			<div className="reservation_02_div" style={{textAlign:"right"}}></div>
		</div>
		</div>
		</div>
  );
}



export default ThemaDetail;