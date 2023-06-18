import React from "react";

const LivePhotos = [
  "https://yt3.ggpht.com/NdSE4MJYyoHu2HGEBrzw3OGsL9n6eH4ogMrseUVtLb5mmkCBZrjcakJDZbHJR6H-73g6lwfTTw=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/t44eb0-Fp-_MDCA1gk2lTQd0vn1RSyRGwJzptQhVxGiyx9wdzSVF-c2JupBPdkZB84zBCk_q=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/zsUkoLK6PbVAExTmQEQn91gow8WB_EOPL4XUI9vFopFUZ1jIy11BYsoNmztfCA-pB8zC7jT0=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/B-Bf0s4FeWmrnNM4ZYwWhIaOUEwTcaThlvmsmUzVQ4eA3NO7_vNeGMx827Hx6XDiwoMpRmgc0CQ=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AGIKgqOZXn0ogtEzh5dDJj-SYT6Fq1mAmt_MQhx7Zlnr8Q=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/9zPo2rYtDs2hyKqXk37QKwgy2pMjZHq-DyvY3OdDSo_3wUEiK0lM0tclw8-l246pB1XpHgyN39Y=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/aeR0gGkDfPbQqy8QgJHUJ6D7LArHl-PZP0TUX_fozFhpvlJIXb2MPoWrJfiLL1vdUaMwXCfr=s176-c-k-c0x00ffffff-no-rj-mo",
  "https://yt3.ggpht.com/cLDoWux71RiKdaOH50e4Zhm6qpMRjYODfo-_fKstLuCAZyXYmrjDYRCS0TY9BJyZq78l-wKbgg=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/qYWSC3s8Nd5fmeT2fLcgsaCAPy0RSIl9nC1v_wbZC0811JdQAP7IjPmFlFNEqyZKKOkXQAqn=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/VgMedJrE_vc6WQp0kYQXm0jOt_4rmkW8oNoUPrPsA6ace-Ru0kezydesokMWb4dzKl_Ec02J=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/1dQr0Z6BnHxSpBd3WBZeiNrCo8kbqTAjUJSV7Zg_KcYMbrHUwzeLUAPBfwWnZihk-Vj_UKhW4g=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/L0T8LQNUMgT9_Zz6oN0uf5nNcY6aykiZFf1BIblmoDRTKwaFShwq3Z88uWaPy6b4V5m0eb8JgQ=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/2u-ofObGSOllGxqdAOR-hT5LnJPaeJRlVecoPPXU2xOAapKht27z1Al249yjcffgpiM_YNZBOw=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AGIKgqNre2KB41E6ctzL9JoHHmYW8rj_WeNCDFuv0f0hhA=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AGIKgqM-eh24bkhq5gnFUDeBpiOTSP86GpHaufG4-dCT=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/Kjwaz9megj8thtu3H6BakHZihzJh6xYjVs6ZafPREuNFyvdIzask7dTYjA2UKjKglG5Int-vI9M=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AGIKgqOlG43-qWyT3IjMSPSXZx2DnYfK1sx-zbfynII=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/jd0xelzQ-GgvGkDYC0YDnxMjoRVNqlaLPFB3kuVYzebNriNcr9ZWuC2T2386hbFzR7uiuPQ=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/rGOgosffxm4AXxFF7b7-PDMy95j3rVg6m1kQTLNlSUzIPDwUMoopP1T8Filss08B-oI7k9jsNvQ=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/knFVviYXLn2LIu_RVEXB6AcfQnbCYaOjqn71ZbFbX_6pRQsg1NLHydsqrN1H64n4UbLlYCPg6Q=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AGIKgqPDOD0uI0dIGpp4IsjsAOXttOXvS5Glft9u5easlas=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AGIKgqO-RepRGUOjH0R-7b4JN6GViQF1LAGnsdW7XOIhKw=s48-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/9k35ldjoCZa1x-bsARUiJ8tB5A0sE3gc5qi8Ti8xyQ8eZf4wgZY9bJCKsvGC_McqqQ0YeymqwQ=s48-c-k-c0x00ffffff-no-rj",
];

const random = () => {
  return Math.floor(Math.random() * 23) + 1;
};

const LiveMessage = ({ name, text }) => {
  return (
    <div className="py-1 flex items-center text-sm">
      <img src={LivePhotos[random()]} alt="" className="w-7 h-7 rounded-full" />
      <div className="flex">
        <span className="font-bold px-2">{name}</span>
        <span className="font-normal">{text}</span>
      </div>
    </div>
  );
};

export default LiveMessage;
