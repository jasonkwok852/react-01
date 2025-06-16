// Counter 組件
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center counter-container">
      <h1 className="text-2xl font-bold mb-4">簡單計數器</h1>
      <p className="text-lg mb-4">計數：{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          增加
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          減少
        </button>
      </div>
    </div>
  );
}

// 渲染組件到 DOM
ReactDOM.render(<Counter />, document.getElementById("root"));
