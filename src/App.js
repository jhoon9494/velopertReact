import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({ username: "", email: "" });
  const { username, email } = inputs;
  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // 불변성을 지키면서 배열에 새 항목을 추가하는 방법
    // 1. spread 연산자 사용 ex) setUsers([...users, user])
    // 2. concat 함수 사용 ex) setUsers(users.concat(user))
    user.username !== "" && user.email !== "" && setUsers((users) => [...users, user]);
    setInputs({ username: "", email: "" });
    nextId.current += 1;
  }, [username, email]);
  const onRemove = useCallback((id) => {
    // 불변성을 지키면서 배열에 항목을 제거하는 방법
    // filter 함수 사용
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    // 불변성을 지키면서 배열을 업데이트(수정)하는 방법
    // map 함수 사용
    setUsers((users) =>
      users.map((user) => (user.id !== id ? user : { ...user, active: !user.active }))
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
