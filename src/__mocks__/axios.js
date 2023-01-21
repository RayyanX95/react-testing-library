const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Ibr",
          last: "Rayyan",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "RayyanX95",
        },
      },
    ],
  },
};

const MockAxios = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default MockAxios;
