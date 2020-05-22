# Observer Pattern Use TypeScript In React

리액트에서 타입스크립트를 사용해 옵저버 패턴을 구현한 프로젝트 입니다.

예시는 Todo List를 사용하였습니다.

## Preview

![1](https://github.com/Vallista/React-Observer-Pattern-Use-TypeScript/blob/master/screenshots/2.gif?raw=true)

## Ideation

전체 추가와 전체 삭제 코드를 보면 옵저버 패턴으로 구현되어 있습니다.

**models/Observer.ts**

IObserver 인터페이스를 implements 받은 대상을 Subject에서 has-a 형태로 갖습니다.

<br/>

**models/TodoList.ts**

TodoList.ts는 IObserver를 implements 합니다. 그렇기에 언제든지 Subject에 등록 될 수 있습니다.

<br/>

**hooks/useTodo.tsx**

addTodoList 함수에서 보면, TodoList를 추가할 때마다 생성한 Subject 객체에 등록합니다.

allAddTodo와 allRemoveTodo에서 Observer에게 지시합니다.

## Installation & Launch

```sh
$ npm install

# use Yarn
$ yarn
```

```sh
$ npm run start

# use Yarn
$ yarn start
```

## Folder Structure

폴더 구조는 심플하게 components, hooks, models, utils로 이루어져 있습니다.

### components

레이아웃 컴포넌트가 담긴 폴더입니다.

<br/>

**Todo.tsx**

Todo 하나에 대해서 렌더링 해주는 Component입니다

**Todos.tsx**

Todo를 리스트형태로 들고 있으면서 출력해주는 Component입니다.

---

### hooks

모델과 레이아웃 컴포넌트를 Binding 해주는 MVC 기준으로 Controller에 해당하는 영역입니다.

<br/>

**useTodo.tsx**

React Hooks를 사용하여 만든 커스텀 훅입니다.

내부에서 TodoListCollection을 상태로 갖고있어, 해당 리스트에 Class 객체가 생성되어 들어갑니다.

---

### models

프로젝트에 쓰이는 interface와 class를 갖고 있는 폴더입니다.

<br/>

**Observer.ts**

옵저버 패턴에 사용되는 인터페이스, 클래스들 입니다.

<br/>

**Removable.ts**

삭제할 때 사용되는 인터페이스, 클래스들 입니다.

<br/>

**Todo.ts**

Todo 클래스입니다.

Todo를 추상화 한 클래스입니다.

<br/>

**TodoList.ts**

TodoList 클래스입니다.

TodoList를 추상화 한 클래스입니다.

---

### utils

심심해서 만든 숫자를 한글로 바꿔주는 함수를 담고 있습니다.