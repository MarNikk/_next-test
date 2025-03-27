export default async function Page() {
  console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <p>it's customers</p>
  );
}
  