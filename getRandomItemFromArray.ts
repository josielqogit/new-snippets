function getRandomItemFromArray<T>(list:T[]): T{
  const randomIndex = Math.floor(Math.random * list.length);
  return list[randomIndex];
}

