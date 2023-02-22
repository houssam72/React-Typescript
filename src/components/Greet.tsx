type GreetProps = {
  name: string;
  // Optionnal props
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  // message count to 0 par default if we don't have messageCount because messageCount is Optional props
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! you have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>{" "}
    </div>
  );
};
