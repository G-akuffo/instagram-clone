import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://pbs.twimg.com/media/E9amnSLWQAAHEfh?format=jpg&name=medium",
    user: USERS[6].user,
    likes: 7870,
    caption: "wedding guest",
    profile_picture: USERS[6].image,
    comments: [
      {
        user: "theqazman",
        comment:
          "this is nice. very nice. so nice. fanice, so nice, nice, nice",
      },
      {
        user: "amaanath.dev",
        comment:
          "something something I wanna see this on multiple lines so I will type just anything to make it that",
      },
    ],
  },
  {
    imageUrl:
      "https://pbs.twimg.com/media/FRs7bejWYAI9kX7?format=jpg&name=large",
    user: USERS[0].user,
    likes: 983,
    caption:
      "best album. this album brings back so many of my teenage memories",
    profile_picture: USERS[0].image,
  },
];
