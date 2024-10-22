// userinfo
export interface UserProfileProps {
  user: {
    _id: string;
    id: string;
    role: string;
    power: string[];
    branch: string;
    Skill: string[];
    asp: string[];
    needsPasswordChange: boolean;
    Engineer: {
      _id: string;
      id: string;
      name: {
        firstName: string;
        lastName: string;
        middleName: string;
      };
      email: string;
      contactNo: string;
      power: string[];
      branch: string;
      Skill: string[];
      score: number;
      asp: string[];
      designation: string;
      profileImage: string;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}
