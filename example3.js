// Sử dụng async/await để tránh callback hell và làm code dễ đọc
const fetchData = async () => {
  const a = await getData();
  const b = await parseData(a);
  const c = await processData(b);
  await displayData(c);
  console.log('Done');
}