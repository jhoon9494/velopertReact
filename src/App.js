import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { useInput } from "./hooks/useInput";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
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
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { users: [...state.users, action.user] };
    case "REMOVE_USER":
      return { users: state.users.filter((user) => user.id !== action.id) };
    case "TOGGLE_USER":
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    default:
      return state;
  }
};

function App() {
  const [{ username, email }, onChange, reset] = useInput({ username: "", email: "" });
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({ type: "CREATE_USER", user: { id: nextId.current, username, email } });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE_USER", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE_USER", id });
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
