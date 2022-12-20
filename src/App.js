import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [b1, setb1] = useState(" ");
  const [b2, setb2] = useState(" ");
  const [b3, setb3] = useState(" ");
  const [b4, setb4] = useState(" ");
  const [b5, setb5] = useState(" ");
  const [b6, setb6] = useState(" ");
  const [b7, setb7] = useState(" ");
  const [b8, setb8] = useState(" ");
  const [b9, setb9] = useState(" ");

  const [cnt, setcnt] = useState(0);
  const [win, setwin] = useState(" ");

  const btn1 = () => {
    if(b1==" ")
    {
      if (cnt % 2 == 0) {
        setb1("X");
        setcnt(cnt + 1);
      } else {
        setb1("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn2 = () => {
    if(b2==" ")
    {
      if (cnt % 2 == 0) {
        setb2("X");
        setcnt(cnt + 1);
      } else {
        setb2("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn3 = () => {
    if(b3==" ")
    {
      if (cnt % 2 == 0) {
        setb3("X");
        setcnt(cnt + 1);
      } else {
        setb3("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn4 = () => {
    if(b4== " ")
    {
      if (cnt % 2 == 0) {
        setb4("X");
        setcnt(cnt + 1);
      } else {
        setb4("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn5 = () => {
    if(b5 == " ")
    {
      if (cnt % 2 == 0) {
        setb5("X");
        setcnt(cnt + 1);
      } else {
        setb5("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn6 = () => {
    if(b6==" ")
    {
      if (cnt % 2 == 0) {
        setb6("X");
        setcnt(cnt + 1);
      } else {
        setb6("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn7 = () => {
    if(b7==" ")
    {
      if (cnt % 2 == 0) {
        setb7("X");
        setcnt(cnt + 1);
      } else {
        setb7("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn8 = () => {
    if(b8 == " ")
    {
      if (cnt % 2 == 0) {
        setb8("X");
        setcnt(cnt + 1);
      } else {
        setb8("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const btn9 = () => {
    if(b9 == " ")
    {
      if (cnt % 2 == 0) {
        setb9("X");
        setcnt(cnt + 1);
      } else {
        setb9("O");
        setcnt(cnt + 1);
      }
    }
    winner();
  };
  const winner = () => 
  { 
    // alert();
    if (b1 == "X" && b2 == "X" && b3 == "X") 
    {
      setwin("X is winner");
    }
    else if(b4 == "X" && b5 == "X" && b6 == "X" )
    {
      setwin("X is  winner")
    }
    else if(b7 == "X" && b8 == "X" && b9 == "X")
    {
      setwin("X is winner")
    }
    else if(b1=="X" && b4=="X" && b7=="X")
    {
      setwin("X is winner");
    }
    else if(b2=="X" && b5=="X" && b8=="X")
    {
      setwin("X is winner")
    }
    else if(b3=="X" && b6=="X" && b9=="x")
    {
      setwin("X is winner")
    }
    else if(b1=="X" && b5=="X" && b9=="X")
    {
      setwin("X is winner")
    }
    else if(b3=="X" && b5=="X" && b7=="X")
    {
      setwin("X is winner")
    }

    else if (b1 == "O" && b2 == "O" && b3 == "O") 
    {
      setwin("O is winner");
    }
    else if(b4 == "O" && b5 == "O" && b6 == "O" )
    {
      setwin("O is  winner")
    }
    else if(b7 == "O" && b8 == "O" && b9 == "O")
    {
      setwin("O is winner")
    }
    else if(b1 == "O" && b4 == "O" && b7 == "O")
    {
      setwin("O iswinner");
    }
    else if(b2 == "O" && b5 == "O" && b8 == "O")
    {
      setwin("O is winner")
    }
    else if(b3 == "O" && b6 == "O" && b9 == "O")
    {
      setwin("O is winner")
    }
    else if(b1 == "O" && b5 == "O" && b9 == "O")
    {
      setwin("O is winner")
    }
    else if(b3 == "O" && b5 == "O" && b7 == "O")
    {
      setwin("O is winner")
    }
  };

  return (
    <div className="App">
      {/* <h1>hellow</h1> */}
      <div className="main">
        <div className="iner">

          <input type="button"
            onClick={() => {
              btn1();
            }}
            value={b1}
          />
          <input
            type="button"
            onClick={() => {
              btn2();
            }}
            value={b2}
          />
          <input
            type="button"
            onClick={() => {
              btn3();
            }}
            value={b3}
          />
        </div>
        <div>
          <input
            type="button"
            onClick={() => {
              btn4();
            }}
            value={b4}
          />
          <input
            type="button"
            onClick={() => {
              btn5();
            }}
            value={b5}
          />
          <input
            type="button"
            onClick={() => {
              btn6();
            }}
            value={b6}
          />
        </div>
        <div>
          <input
            type="button"
            onClick={() => {
              btn7();
            }}
            value={b7}
          />
          <input
            type="button"
            onClick={() => {
              btn8();
            }}
            value={b8}
          />
          <input
            type="button"
            onClick={() => {
              btn9();
            }}
            value={b9}
          />
        </div>
        <input
          type="text"
          onChange={() => {
            winner();
          }}
          value={win}
        />
      </div>
    </div>
  );
}
export default App;
