import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiFromCurrentRender, queueRerenderWithNewEmoji] = useState("");
  const [emojiFromPreviousRender, queueRerenderWithPreviousEmoji] = useState("");
 


  const changeEmojiToClock =() => {
    queueRerenderWithNewEmoji("⏰");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }

  const changeEmojiToAngel=() => {
    queueRerenderWithNewEmoji("😇");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }
    

  const changeEmojiToUnimpressed =() => {
    queueRerenderWithNewEmoji("😒");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }

  const changeEmojiToBed =() => {
    queueRerenderWithNewEmoji("🛌");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }

  const changeEmojiToSilly=() => {
    queueRerenderWithNewEmoji("🤪");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }

  const changeEmojiToParty =() => {
    queueRerenderWithNewEmoji("🥳 ");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }
  const changeEmojiToStarstruck =() => {
    queueRerenderWithNewEmoji("🤩 ");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }

  const changeEmojiToGeek =() => {
    queueRerenderWithNewEmoji("🥸 ");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }
  const changeEmojiToCool =() => {
    queueRerenderWithNewEmoji("😎");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }

  const changeEmojiToNerd =() => {
    queueRerenderWithNewEmoji("🤓");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }
  const changeEmojiToHmm =() => {
    queueRerenderWithNewEmoji("🧐");
    queueRerenderWithPreviousEmoji(emojiFromCurrentRender);
  }

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Emoji: {emojiFromPreviousRender}, {emojiFromCurrentRender}</p>
      <button onClick={changeEmojiToAngel}>😇</button>
      <button onClick={changeEmojiToBed}>🛌</button>
      <button onClick={changeEmojiToClock}>⏰</button>
      <button onClick={changeEmojiToCool}>😎</button>
      <button onClick={changeEmojiToGeek}>🥸</button>
      <button onClick={changeEmojiToHmm}>🧐</button>
      <button onClick={changeEmojiToNerd}>🤓</button>
      <button onClick={changeEmojiToParty}>🥳</button>
      <button onClick={changeEmojiToStarstruck}>🤩 </button>
      <button onClick={changeEmojiToSilly}>🤪</button>
      <button onClick={changeEmojiToUnimpressed}>😒</button>
     
    </>
  );
}
