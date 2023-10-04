const sessionConfig = {};

sessionConfig.session = ''; //https://localhost:443/rooms/71b1e408...
sessionConfig.iddleParticipants = true;

// Traditional Sessions
sessionConfig.tech = {
  email: 'tech3@test.com', password: '1234' //, audioFile: null, videoFile: null,
};
// sessionConfig.coordinator =  {email: 'coordindator@test.com', password: '1234', audioFile: null};
sessionConfig.operator = {
  email: 'operator@test.com', password: '1234' //, audioFile: null, videoFile: null,
};

sessionConfig.coordinator = {
  email: 'coordinator@test.com', password: '1234' //, audioFile: null, videoFile: null,
};

sessionConfig.interpreters = [
  {
    email: 'interpreter@test.com', password: '1234' //, audioFile: null, videoFile: null,
  },
  {
    email: 'int2@test.com', password: '1234' //, audioFile: null, videoFile: null,
  },
];

sessionConfig.numberPublic = 5;
sessionConfig.publicAddr = '';

// Educative sessions WIP
//sessionConfig.educational = false;

/*
sessionConfig.teacher = {email: 'teacher@test.com', password: ''}

sessionConfig.students = [
    {email: 'int@test.com', password: '1234', audioFile: null, videoFile: null},
    {email: 'int2@test.com', password: '1234', audioFile: null, videoFile: null}
];
*/

module.exports = sessionConfig;
