"use client"
import { useUser } from "@clerk/nextjs";

const Homepage =  () => {
  const user = useUser();


  return (
    <div>
      <div>
        <div>
          <h1>The All-In-One Platform For Managing Your Budget</h1>
          <p>
            Track spending, set goals, and save effortlessly with Budget-io –
            the intuitive budget app that helps you manage finances without the
            stress. Get real-time insights, personalized tips, and financial
            freedom at your fingertips
          </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;
