"use client";
import { useState, Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/formContainer";
import SearchParams from "@/components/searchParams";

import { Input } from "@/components/ui/input";
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
import { Textarea } from "@/components/ui/textarea";

// import { sendEmail } from "../helpers/mail";

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

const schema = yup
  .object({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    cpassword: yup
      .string()
      .required("Please re-enter your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
    referralID: yup.string(),
  })
  .required();

export default function Register() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [divAppearance, setDivApperance] = useState("");

  const [show, setShow] = useState(false);
  // let reEmail = null;
  const refID = (
    <Suspense>
      <SearchParams />
    </Suspense>
  );

  async function signup(data) {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("country", selectedValue);
    formData.append("referralID", data.refferalID);
    setLoading(true);
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const cdata = await res.json();
        if (cdata.error) {
          setLoading(false);
          toast.error(cdata.error, {
            duration: 8000,
          });
        } else {
          sessionStorage.setItem(
            "newlogin",
            // "Registration successful. Please check your email for the link",
            "Registration successful. Please login",
          );
          router.push("/login");
        }
        // setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Form
          text1={"Register"}
          text2={"Sign up and get started with your account"}
        >
          <form
            onSubmit={handleSubmit(signup)}
            className="center-form space-y-4"
          >
            {show && (
              <p className="text-center text-sm">
                <a href="#" className="underline" onClick={runEmail}>
                  Click here
                </a>{" "}
                to resend email
              </p>
            )}

            <div>
              <p className="text-tbody mb-1 text-left text-sm text-red-500">
                {errors.firstname?.message}
              </p>
              <label htmlFor="firstname" className="sr-only">
                Firstname
              </label>

              <div>
                <Input
                  type="text"
                  placeholder="Firstname"
                  autoComplete="off"
                  {...register("firstname")}
                />
              </div>
            </div>

            <div>
              <p className="text-tbody mb-1 text-left text-sm text-red-500">
                {errors.lastname?.message}
              </p>
              <label htmlFor="lastname" className="sr-only">
                Lastname
              </label>

              <div>
                <Input
                  type="text"
                  placeholder="Lastname"
                  autoComplete="off"
                  {...register("lastname")}
                />
              </div>
            </div>

            <div>
              <p className="text-tbody mb-1 text-left text-sm text-red-500">
                {errors.email?.message}
              </p>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <p className="text-tbody mb-1 text-left text-sm text-red-500">
                {errors.country?.message}
              </p>
              {/* <Select {...register("country")}></Select> */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger name="country">
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countries.map((country, index) => (
                      <SelectItem key={`country-${index}`} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-tbody mb-1 text-left text-sm text-red-500">
                {errors.password?.message}
              </p>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <p className="text-tbody mb-1 text-left text-sm text-red-500">
                {errors.cpassword?.message}
              </p>
              <label htmlFor="password" className="sr-only">
                Confirm Password
              </label>

              <div>
                <Input
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="off"
                  {...register("cpassword")}
                />
              </div>
            </div>
            <div className="hidden">
              <span ref={(el) => setDivApperance(el?.innerText)}>{refID}</span>{" "}
              <label htmlFor="referral" className="sr-only">
                Refferal ID
              </label>
              <div>
                <Input
                  type="text"
                  placeholder="Rederral ID (Optional)"
                  value={divAppearance !== "" ? divAppearance : ""}
                  disabled
                />
              </div>
              <p className="text-tbody text-left text-sm text-red-500">
                {errors.referralID?.message}
              </p>
            </div>

            <div className="">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
            <div className="">
              <p className="flex justify-center text-sm text-muted-foreground">
                Already have an account?&nbsp;
                <a className="underline hover:no-underline" href="/login">
                  Login
                </a>
              </p>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
