const sessionConfig = {};

sessionConfig.session = 'https://localhost:4430/rooms/71b1e408-e82b-46c5-8c21-2d7a12ef0ff5';
sessionConfig.educational = false;

// Traditional Sessions
sessionConfig.tech = {
  email: 'tech3@test.com', password: '1234', audioFile: null, videoFile: null,
};
// sessionConfig.coordinator =  {email: 'coordindator@test.com', password: '1234', audioFile: null};
sessionConfig.operator = {
  email: 'operator@test.com', password: '1234', audioFile: null, videoFile: null,
};

sessionConfig.coordinator = {
  email: 'coordinator@test.com', password: '1234', audioFile: null, videoFile: null,
};

sessionConfig.interpreters = [
  {
    email: 'interpreter@test.com', password: '1234', audioFile: null, videoFile: null,
  },
  {
    email: 'int2@test.com', password: '1234', audioFile: null, videoFile: null,
  },
];

sessionConfig.numberPublic = 0;

// Educative sessions

/*
sessionConfig.teacher = {email: 'teacher@test.com', password: ''}

sessionConfig.students = [
    {email: 'int@test.com', password: '1234', audioFile: null, videoFile: null},
    {email: 'int2@test.com', password: '1234', audioFile: null, videoFile: null}
];
*/

module.exports = sessionConfig;
