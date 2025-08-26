const url = 'https://api.themoviedb.org/3/authentication';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODQzZWQwZmI2ZGU2YmRmNTgwYmI0MDFkN2I5YTY3ZiIsIm5iZiI6MTc0NDM5NTMwOC43ODQsInN1YiI6IjY3Zjk1YzJjZGU1ZTRkZWM2MmFkN2RmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Mkgzn2FVy_Amw7rZYJkcgUWVYRVUmhTX9CEHFbzhkM'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));