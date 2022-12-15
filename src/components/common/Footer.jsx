import React from "react";
import Git from "../../img/git.webp";
import * as t from "./FooterStyle";

const Footer = () => {
  return (
    <t.Container>
      <t.Wrap>
        <t.Title>(주)트립밸런스리더 :곽규현 부리더:김용문</t.Title>
        <t.Comment>
          “단기간의 성과에는 가차 없이 정직해지고 장기적으로는 낙관과 자신감을
          가지세요.”— 미국 사업가이자 Netflix 공동 CEO Reed Hastings
        </t.Comment>
        <t.Hanhae>도움주신 분들</t.Hanhae>

        <t.Fronts>
          <t.FrontWrap>
            <t.text>FRONT</t.text>
            <t.GitWrap href="https://github.com/kkh9960">
              <t.Gitimg src={Git} alt="git" />
              곽규현
            </t.GitWrap>
            <t.GitWrap href="https://github.com/seongwoo9156">
              <t.Gitimg src={Git} alt="git" /> 박성우
            </t.GitWrap>
            <br />
            <t.GitWrap href="https://github.com/jnwnddh">
              <t.Gitimg src={Git} alt="git" /> 이중오
            </t.GitWrap>
            <t.GitWrap href="https://github.com/cho-light">
              <t.Gitimg src={Git} alt="git" />
              조광익
            </t.GitWrap>
          </t.FrontWrap>
        </t.Fronts>

        <t.Backs>
          <t.BackWrap>
            <t.text>BACK</t.text>
            <t.GitWrap href="https://github.com/dydrkflqmdl">
              <t.Gitimg src={Git} alt="git" />
              김용문
            </t.GitWrap>
            <t.GitWrap href="https://github.com/jueun330">
              <t.Gitimg src={Git} alt="git" />
              방주은
            </t.GitWrap>
            <t.GitWrap href="https://github.com/chunngamm">
              <t.Gitimg src={Git} alt="git" />
              김장원
            </t.GitWrap>
            <t.DesignWrap href="https://linktr.ee/vozzang">
              DESIGNER 서보영
            </t.DesignWrap>
          </t.BackWrap>
        </t.Backs>
      </t.Wrap>
    </t.Container>
  );
};

export default Footer;
