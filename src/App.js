/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남우동 맛집",
    "포스팅1",
  ]);
  let [like, addLike] = useState(0);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState("");

  function changeTitle() {
    var newArray = [...title];
    newArray[0] = "여자코트추천";
    titleChange(newArray);
  }

  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(
        <div className="list">
          <h3
            onClick={() => {
              누른제목변경(i);
            }}
          >
            {title[i]}{" "}
            <span
              onClick={() => {
                addLike(like + 1);
              }}
            >
              👍
            </span>
            {like}
          </h3>
          <p>2월 17일 발행</p>
          <hr />
        </div>
      );
    }
    return 어레이;
  }

  // let post = "BLOG";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>Button</button>

      {/* {반복된UI()} */}

      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  addLike(like + 1);
                }}
              >
                👍
              </span>
              {like}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      {/*
      // 입력값 안에 input 데이터를 저장하는 방법 
      {입력값}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      /> */}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var arrayCopy = [...title];
            arrayCopy.unshift(입력값);
            titleChange(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
      </button>

      {modal === true ? <Modal title={title} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
