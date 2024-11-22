/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createResident } from "../graphql/mutations";
const client = generateClient();
export default function ResidentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    apartment_no: "",
    move_in_date: "",
    mobile_phone: "",
    parking_no: "",
    vehicle_rego: "",
    pet_type: "",
    pet_weight: "",
    storage_no: "",
    re_name: "",
    re_mobile: "",
    re_email: "",
    email: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [apartment_no, setApartment_no] = React.useState(
    initialValues.apartment_no
  );
  const [move_in_date, setMove_in_date] = React.useState(
    initialValues.move_in_date
  );
  const [mobile_phone, setMobile_phone] = React.useState(
    initialValues.mobile_phone
  );
  const [parking_no, setParking_no] = React.useState(initialValues.parking_no);
  const [vehicle_rego, setVehicle_rego] = React.useState(
    initialValues.vehicle_rego
  );
  const [pet_type, setPet_type] = React.useState(initialValues.pet_type);
  const [pet_weight, setPet_weight] = React.useState(initialValues.pet_weight);
  const [storage_no, setStorage_no] = React.useState(initialValues.storage_no);
  const [re_name, setRe_name] = React.useState(initialValues.re_name);
  const [re_mobile, setRe_mobile] = React.useState(initialValues.re_mobile);
  const [re_email, setRe_email] = React.useState(initialValues.re_email);
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setApartment_no(initialValues.apartment_no);
    setMove_in_date(initialValues.move_in_date);
    setMobile_phone(initialValues.mobile_phone);
    setParking_no(initialValues.parking_no);
    setVehicle_rego(initialValues.vehicle_rego);
    setPet_type(initialValues.pet_type);
    setPet_weight(initialValues.pet_weight);
    setStorage_no(initialValues.storage_no);
    setRe_name(initialValues.re_name);
    setRe_mobile(initialValues.re_mobile);
    setRe_email(initialValues.re_email);
    setEmail(initialValues.email);
    setErrors({});
  };
  const validations = {
    name: [],
    apartment_no: [],
    move_in_date: [],
    mobile_phone: [],
    parking_no: [],
    vehicle_rego: [],
    pet_type: [],
    pet_weight: [],
    storage_no: [],
    re_name: [],
    re_mobile: [],
    re_email: [],
    email: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          apartment_no,
          move_in_date,
          mobile_phone,
          parking_no,
          vehicle_rego,
          pet_type,
          pet_weight,
          storage_no,
          re_name,
          re_mobile,
          re_email,
          email,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createResident.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ResidentCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Apartment no"
        isRequired={false}
        isReadOnly={false}
        value={apartment_no}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no: value,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.apartment_no ?? value;
          }
          if (errors.apartment_no?.hasError) {
            runValidationTasks("apartment_no", value);
          }
          setApartment_no(value);
        }}
        onBlur={() => runValidationTasks("apartment_no", apartment_no)}
        errorMessage={errors.apartment_no?.errorMessage}
        hasError={errors.apartment_no?.hasError}
        {...getOverrideProps(overrides, "apartment_no")}
      ></TextField>
      <TextField
        label="Move in date"
        isRequired={false}
        isReadOnly={false}
        value={move_in_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date: value,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.move_in_date ?? value;
          }
          if (errors.move_in_date?.hasError) {
            runValidationTasks("move_in_date", value);
          }
          setMove_in_date(value);
        }}
        onBlur={() => runValidationTasks("move_in_date", move_in_date)}
        errorMessage={errors.move_in_date?.errorMessage}
        hasError={errors.move_in_date?.hasError}
        {...getOverrideProps(overrides, "move_in_date")}
      ></TextField>
      <TextField
        label="Mobile phone"
        isRequired={false}
        isReadOnly={false}
        value={mobile_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone: value,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.mobile_phone ?? value;
          }
          if (errors.mobile_phone?.hasError) {
            runValidationTasks("mobile_phone", value);
          }
          setMobile_phone(value);
        }}
        onBlur={() => runValidationTasks("mobile_phone", mobile_phone)}
        errorMessage={errors.mobile_phone?.errorMessage}
        hasError={errors.mobile_phone?.hasError}
        {...getOverrideProps(overrides, "mobile_phone")}
      ></TextField>
      <TextField
        label="Parking no"
        isRequired={false}
        isReadOnly={false}
        value={parking_no}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no: value,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.parking_no ?? value;
          }
          if (errors.parking_no?.hasError) {
            runValidationTasks("parking_no", value);
          }
          setParking_no(value);
        }}
        onBlur={() => runValidationTasks("parking_no", parking_no)}
        errorMessage={errors.parking_no?.errorMessage}
        hasError={errors.parking_no?.hasError}
        {...getOverrideProps(overrides, "parking_no")}
      ></TextField>
      <TextField
        label="Vehicle rego"
        isRequired={false}
        isReadOnly={false}
        value={vehicle_rego}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego: value,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.vehicle_rego ?? value;
          }
          if (errors.vehicle_rego?.hasError) {
            runValidationTasks("vehicle_rego", value);
          }
          setVehicle_rego(value);
        }}
        onBlur={() => runValidationTasks("vehicle_rego", vehicle_rego)}
        errorMessage={errors.vehicle_rego?.errorMessage}
        hasError={errors.vehicle_rego?.hasError}
        {...getOverrideProps(overrides, "vehicle_rego")}
      ></TextField>
      <TextField
        label="Pet type"
        isRequired={false}
        isReadOnly={false}
        value={pet_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type: value,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.pet_type ?? value;
          }
          if (errors.pet_type?.hasError) {
            runValidationTasks("pet_type", value);
          }
          setPet_type(value);
        }}
        onBlur={() => runValidationTasks("pet_type", pet_type)}
        errorMessage={errors.pet_type?.errorMessage}
        hasError={errors.pet_type?.hasError}
        {...getOverrideProps(overrides, "pet_type")}
      ></TextField>
      <TextField
        label="Pet weight"
        isRequired={false}
        isReadOnly={false}
        value={pet_weight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight: value,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.pet_weight ?? value;
          }
          if (errors.pet_weight?.hasError) {
            runValidationTasks("pet_weight", value);
          }
          setPet_weight(value);
        }}
        onBlur={() => runValidationTasks("pet_weight", pet_weight)}
        errorMessage={errors.pet_weight?.errorMessage}
        hasError={errors.pet_weight?.hasError}
        {...getOverrideProps(overrides, "pet_weight")}
      ></TextField>
      <TextField
        label="Storage no"
        isRequired={false}
        isReadOnly={false}
        value={storage_no}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no: value,
              re_name,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.storage_no ?? value;
          }
          if (errors.storage_no?.hasError) {
            runValidationTasks("storage_no", value);
          }
          setStorage_no(value);
        }}
        onBlur={() => runValidationTasks("storage_no", storage_no)}
        errorMessage={errors.storage_no?.errorMessage}
        hasError={errors.storage_no?.hasError}
        {...getOverrideProps(overrides, "storage_no")}
      ></TextField>
      <TextField
        label="Re name"
        isRequired={false}
        isReadOnly={false}
        value={re_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name: value,
              re_mobile,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.re_name ?? value;
          }
          if (errors.re_name?.hasError) {
            runValidationTasks("re_name", value);
          }
          setRe_name(value);
        }}
        onBlur={() => runValidationTasks("re_name", re_name)}
        errorMessage={errors.re_name?.errorMessage}
        hasError={errors.re_name?.hasError}
        {...getOverrideProps(overrides, "re_name")}
      ></TextField>
      <TextField
        label="Re mobile"
        isRequired={false}
        isReadOnly={false}
        value={re_mobile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile: value,
              re_email,
              email,
            };
            const result = onChange(modelFields);
            value = result?.re_mobile ?? value;
          }
          if (errors.re_mobile?.hasError) {
            runValidationTasks("re_mobile", value);
          }
          setRe_mobile(value);
        }}
        onBlur={() => runValidationTasks("re_mobile", re_mobile)}
        errorMessage={errors.re_mobile?.errorMessage}
        hasError={errors.re_mobile?.hasError}
        {...getOverrideProps(overrides, "re_mobile")}
      ></TextField>
      <TextField
        label="Re email"
        isRequired={false}
        isReadOnly={false}
        value={re_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email: value,
              email,
            };
            const result = onChange(modelFields);
            value = result?.re_email ?? value;
          }
          if (errors.re_email?.hasError) {
            runValidationTasks("re_email", value);
          }
          setRe_email(value);
        }}
        onBlur={() => runValidationTasks("re_email", re_email)}
        errorMessage={errors.re_email?.errorMessage}
        hasError={errors.re_email?.hasError}
        {...getOverrideProps(overrides, "re_email")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apartment_no,
              move_in_date,
              mobile_phone,
              parking_no,
              vehicle_rego,
              pet_type,
              pet_weight,
              storage_no,
              re_name,
              re_mobile,
              re_email,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
