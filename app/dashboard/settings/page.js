"use client";
import { useState } from "react";
import useData from "@/components/useData";
import GridContainer from "@/components/gridContainer";
import LoadingSpinner from "@/components/loadingSpinner";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Storage } from "megajs";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Territory",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos Islands",
  "Colombia",
  "Comoros",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "North Korea",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of the Congo",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Barthelemy",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "U.S. Virgin Islands",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican",
  "Venezuela",
  "Vietnam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function Setings() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };
  const router = useRouter();
  const { dataLoading, data } = useData();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(false);
  const [edit, setEdit] = useState(false);
  const [verify, setVerify] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    username: "",
    fullname: "",
    // phone: "",
    // date: "",
    country: "",
    address: "",
  });

  const [passData, setPassData] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const [files, setFiles] = useState({
    passport: "",
    ID: "",
  });

  function handleChangePersonalInfo(event) {
    const { name, value } = event.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleChangePassword(event) {
    const { name, value } = event.target;
    setPassData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function funcPassword() {
    // console.log(passData);
    if (
      (passData.currentpassword,
      passData.newpassword,
      passData.confirmpassword !== "")
    ) {
      const sure = confirm("Are you sure you want to change your password");
      if (sure) {
        setLoading(true);
        if (passData.currentpassword !== data?.password) {
          toast.error("Current password is incorrect", { duration: 3000 });
          setLoading(false);
        } else if (passData.newpassword !== passData.confirmpassword) {
          toast.error("New password and password confirmation do not match", {
            duration: 3000,
          });
          setLoading(false);
        } else {
          dbPassword();
        }
      }
    }
  }

  async function dbPassword() {
    const formData = new FormData();
    if (personalInfo) {
      formData.append("id", data?._id);
      formData.append("password", passData.newpassword);
    }

    try {
      const res = await fetch(`/api/profile/pass`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const cdata = await res.json();
        if (cdata.error) {
          setLoading(false);
          toast.error("Error while changing password", { duration: 3000 });
        }
      }
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  async function dbPersonalInformation() {
    const sure = confirm(
      "Are you sure you want to change your personal information",
    );
    if (sure) {
      setLoading(true);
      const formData = new FormData();
      if (personalInfo) {
        formData.append("id", data?._id);
        formData.append("username", personalInfo.username);
        formData.append("fullname", personalInfo.fullname);
        formData.append("phone", personalInfo.phone);
        formData.append("date", personalInfo.date);
        formData.append("country", selectedValue);
        formData.append("address", personalInfo.address);
      }

      try {
        const res = await fetch(`/api/profile`, {
          method: "POST",
          body: formData,
        });
        if (res.ok) {
          const cdata = await res.json();
          if (cdata.error) {
            setLoading(false);
          }
        }
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }
  }

  async function funcFiles() {
    if (data?.kyc === true) {
      toast.success("Already verified", { duration: 3000 });
    } else {
      if (files.ID && files.passport) {
        setLoading(true);
        const { ID, passport } = files;
        const storage = await new Storage({
          email: "sofato6367@jahsec.com",
          password: "Alphatradersx1234",
        }).ready;

        const bytes1 = await ID.arrayBuffer();
        const buffer1 = Buffer.from(bytes1);
        const send1 = await storage.upload(ID.name, buffer1).complete;
        const link1 = await send1.link();

        const bytes2 = await passport.arrayBuffer();
        const buffer2 = Buffer.from(bytes2);
        const send2 = await storage.upload(passport.name, buffer2).complete;
        const link2 = await send2.link();

        const formData = new FormData();
        formData.append("id", data?._id);
        formData.append("link1", link1);
        formData.append("link2", link2);

        try {
          const res = await fetch(`/api/profile/verification`, {
            method: "POST",
            body: formData,
          });
          if (res.ok) {
            const cdata = await res.json();
            if (cdata.error) {
              setLoading(false);
              toast.success("Not submitted, try again", { duration: 4000 });
            }
          }
        } catch (error) {
          console.error(error.message);
        }
      }
    }
  }

  async function logout() {
    setLoading(true);
    try {
      await fetch("/api/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  if (dataLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <GridContainer>
          <div className="heading">
            {verify ? (
              <span>User Verification</span>
            ) : password ? (
              <span>Password</span>
            ) : (
              <span>Personal Information</span>
            )}
            {/* {verify && <>User Verification</>} */}
          </div>
          <div className="grid grid-cols-1 space-y-5 md:grid-cols-5 md:space-x-10 md:space-y-0">
            <Card className="col-span-3 space-y-4 p-6">
              {verify ? (
                <>
                  {" "}
                  <div>
                    <label className="text-base font-medium">
                      Upload Passport
                    </label>

                    <div>
                      <Input
                        type="file"
                        className="w-full rounded-lg p-1 text-base"
                        accept="image/*"
                        onChange={(e) =>
                          setFiles({
                            ...files,
                            passport: e.target.files[0],
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium">
                      Upload ID card
                    </label>

                    <div>
                      <Input
                        type="file"
                        className="w-full rounded-lg p-1 text-base"
                        accept="image/*"
                        onChange={(e) =>
                          setFiles({
                            ...files,
                            ID: e.target.files[0],
                          })
                        }
                      />
                    </div>
                  </div>
                  <Button onClick={funcFiles}>Proceed</Button>
                </>
              ) : (
                <>
                  {password ? (
                    <>
                      <div>
                        <label
                          htmlFor="password"
                          className="text-base font-medium"
                        >
                          Enter Current Password
                        </label>

                        <div>
                          <Input
                            type="text"
                            name="currentpassword"
                            autoComplete="off"
                            defaultValue={passData.currentpassword}
                            onChange={handleChangePassword}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="text-base font-medium"
                        >
                          Enter New Password
                        </label>

                        <div>
                          <Input
                            type="text"
                            name="newpassword"
                            autoComplete="off"
                            defaultValue={passData.newpassword}
                            onChange={handleChangePassword}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="text-base font-medium"
                        >
                          Confirm New Password
                        </label>
                        <div>
                          <Input
                            type="text"
                            name="confirmpassword"
                            autoComplete="off"
                            defaultValue={passData.confirmpassword}
                            onChange={handleChangePassword}
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        onClick={funcPassword}
                      >
                        Proceed
                      </Button>
                    </>
                  ) : (
                    <>
                      {edit ? (
                        <>
                          {" "}
                          <div className="text-priblue m-auto mb-0 space-y-3">
                            <div>
                              <label
                                htmlFor="firstname"
                                className="text-base font-medium"
                              >
                                Firstname
                              </label>

                              <div>
                                <Input
                                  type="text"
                                  name="firstname"
                                  autoComplete="off"
                                  defaultValue={data?.firstname}
                                  onChange={handleChangePersonalInfo}
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="lastname"
                                className="text-base font-medium"
                              >
                                Lastname
                              </label>

                              <div>
                                <Input
                                  type="text"
                                  name="lastname"
                                  autoComplete="off"
                                  defaultValue={data?.lastname}
                                  onChange={handleChangePersonalInfo}
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="text-base font-medium"
                              >
                                Email
                              </label>

                              <div>
                                <Input
                                  type="email"
                                  name="email"
                                  defaultValue={data?.email}
                                  autoComplete="off"
                                  disabled
                                />
                              </div>
                            </div>

                            {/* <div>
                              <label
                                htmlFor="phone"
                                className="text-base font-medium"
                              >
                                Phone
                              </label>

                              <div>
                                <Input
                                  type="number"
                                  name="phone"
                                  autoComplete="off"
                                  defaultValue={data?.phone}
                                  onChange={handleChangePersonalInfo}
                                />
                              </div>
                            </div> */}

                            <div>
                              <label
                                htmlFor="country"
                                className="text-base font-medium"
                              >
                                Country
                              </label>

                              <Select onValueChange={handleSelectChange}>
                                <SelectTrigger name="country">
                                  <SelectValue placeholder="Choose a country" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {countries.map((country, index) => (
                                      <SelectItem
                                        key={`country-${index}`}
                                        value={country}
                                      >
                                        {country}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-priblue m-auto mb-0 space-y-3">
                            <div>
                              <label
                                htmlFor="firstname"
                                className="text-base font-medium"
                              >
                                Firstname
                              </label>

                              <div>
                                <Input
                                  type="text"
                                  defaultValue={data?.firstname}
                                  autoComplete="off"
                                  disabled
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="lastname"
                                className="text-base font-medium"
                              >
                                Lastname
                              </label>

                              <div>
                                <Input
                                  type="text"
                                  defaultValue={data?.lastname}
                                  autoComplete="off"
                                  disabled
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="text-base font-medium"
                              >
                                Email
                              </label>

                              <div>
                                <Input
                                  type="email"
                                  defaultValue={data?.email}
                                  disabled
                                />
                              </div>
                            </div>

                            {/* <div>
                              <label
                                htmlFor="phone"
                                className="text-base font-medium"
                              >
                                Phone
                              </label>

                              <div>
                                <Input
                                  type="number"
                                  defaultValue={data?.phone || 0}
                                  autoComplete="off"
                                  disabled
                                />
                              </div>
                            </div> */}

                            <div>
                              <label
                                htmlFor="country"
                                className="text-base font-medium"
                              >
                                Country
                              </label>

                              <div>
                                <Input
                                  type="text"
                                  defaultValue={data?.country}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="mt-4 flex items-center gap-x-2">
                        {!edit ? (
                          <Button
                            type="submit"
                            className="w-full"
                            onClick={() => setEdit(true)}
                          >
                            Change
                          </Button>
                        ) : (
                          <>
                            <Button
                              type="submit"
                              onClick={dbPersonalInformation}
                            >
                              Save changes
                            </Button>
                            <Button
                              type="submit"
                              variant="outline"
                              onClick={() => setEdit(false)}
                            >
                              Cancel
                            </Button>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </Card>
            <div>
              <div className={"text-textwhite space-y-5 text-base"}>
                <div
                  className="flex items-center gap-x-4 text-base hover:cursor-pointer hover:underline"
                  onClick={() => {
                    setVerify(false);
                    setPassword(false);
                  }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-3"
                    >
                      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z" />
                    </svg>
                  </p>
                  <p>Personal Information</p>
                </div>
                {/* <div
                  className="flex items-center gap-x-4 text-base hover:cursor-pointer hover:underline"
                  onClick={() => {
                    setVerify(true);
                  }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-3"
                    >
                      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z" />
                    </svg>
                  </p>
                  <p>Verification</p>
                </div> */}
                <div
                  className="flex items-center gap-x-4 text-base hover:cursor-pointer hover:underline"
                  onClick={() => {
                    setVerify(false);
                    setPassword(true);
                  }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-3"
                    >
                      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z" />
                    </svg>
                  </p>
                  <p>Change Password</p>
                </div>
                <div className="flex items-center gap-x-4 text-base hover:cursor-pointer hover:underline">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-3"
                    >
                      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z" />
                    </svg>
                  </p>
                  <p onClick={logout}>Logout</p>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      )}
    </>
  );
}
