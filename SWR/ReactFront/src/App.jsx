import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Table } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useSwr, { trigger } from "swr";
import Counter from "./Counter";
import { useState, useEffect } from "react";
function App() {
  //SWR을 사용하지 않은 axios만을 사용한 데이터 fetching
  /**
   * TextFiled에 무언가 입력하면 setName이 일어나고 업로드 버튼을 누르면 createItem함수에 의해
   * 그 name이 서버로 post되고 동시에 그 post된 내용을 가져와 data에 data를 갱신한다(setData).
   * 그리고 그 갱신된 데이터는 TableBody에 입력된다.
   */
//   const [data, setData]=useState([]);

//   const[name, setName]=useState('');

//   useEffect(()=>{
//       fetchItems();
//   },[])

//   const fetchItems=async()=>{
//       const resp=await axios.get('http://localhost:4000/api');
//       setData(resp.data);
//   }
//   const createItem=async(e)=>{
//       const resp=await axios.post('http://localhost:4000/api', {name});
//       setData([...data, resp.data,]);
//   };

  ////////////////////////////////////////////

    /**
   * 이전코드에는 존재했던 fetchItems는 없음. 즉 useEffect안에 있던 fetchItems는 존재하지 않음.
   */

  const fetcher = async (url) => {
    const resp = await axios.get(url);

    return resp.data;
  };
  /**
   *  mutate는 결과적으로 사용자가 더 빠르게 데이터를 볼수 있도록 해준다. 어떻게? post로 데이터를 날리고 응답으로 데이터가 오기를 기다리기
   * 전에 먼저 업데이트를 하는 원리
   */
  const { data, mutate } = useSwr("http://localhost:4000/api", fetcher, {
    refreshInterval: 1000,//설정한 시간을 간격으로 지속적으로 refresh해줌
  });
  const [name, setName] = useState("");

  const createItem = async (e) => {
    const curCache = data;
    mutate(
      [
        ...data, //기존데이터
        {
          name, //axios.pos로 보내는 name을 보내기 전에 미리 업데이트 하고 있음(새로 추가되는 데이터)
        },
      ],
      false //서버에 다시 요청하여 다시 값을 가져올지를 묻는 인자. 즉 useSwr을 한번더 실행할지를 묻는 것
    );

    const resp = await axios.post("http://localhost:4000/api", {
      name,
    });

    //post를 보내고 이와같이 한번더 mutate를 사용하여 서버에서 id를 가져오는 즉시 가져온 값을 화면에 랜더링해줌
    // mutate(
    //   [
    //     ...data, //기존데이터
    //     resp.data,
    //   ],
    //   false //서버에 다시 요청하여 다시 값을 가져올지를 묻는 인자. 즉 useSwr을 한번더 실행할지를 묻는 것
    // );

    //경우에 따라서는 위와같이 axios.post를 통해 가져온 값을 저장하지 않는 경우도 있다(위에서는 resp변수에 그값을 가지고 있음). 그럴경우 GET요청을 별도로 한번 보내 데이터를 가져오게 되는데
    //그 역할을 하는 것이 trigger이다. 왜 이름이 trigger야? POST요청을 보내고 자동으로 GET요청을 보낸다고 하여 trigger라고 불림. 
    trigger("http://localhost:4000/api");
  };



  return (
    <React.Fragment>
      <div
        style={{
          padding: 20,
        }}
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={createItem}>
              업로드
            </Button>
          </Grid>
        </Grid>
        <Counter />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((x, index) => (
              <TableRow key={index}>
                <TableCell>{x.id}</TableCell>
                <TableCell>{x.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </React.Fragment>
  );
}

export default App;
