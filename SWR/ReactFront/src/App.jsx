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
  const [data, setData]=useState([]);

  const[name, setName]=useState('');

  useEffect(()=>{
      fetchItems();
  },[])

  const fetchItems=async()=>{
      const resp=await axios.get('http://localhost:4000/api');
      setData(resp.data);
  }
  const createItem=async(e)=>{
      const resp=await axios.post('http://localhost:4000/api', {name});
      setData([...data, resp.data,]);
  };

  ////////////////////////////////////////////
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
