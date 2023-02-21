import {useEffect} from "react";

import {List} from "./components/List.jsx";
import {Price} from "./components/Price.jsx";

import {CountryStore} from "./store/CountryStore.js";
import {lowerNumberOption} from "./utils/helpers.js";

export const App = () => {
    const {optionList, selectedCountry, selectedOption} = CountryStore.getState();
    const countryList = CountryStore((state) => {
        return {
            countries: state.countryList.OptionA,
            options: state.countryList.OptionB,
        };
    });

    const {setCountryList, setOptionList, setSelectedCountry, setSelectedOption} = CountryStore(state => ({
        setCountryList: state.setCountryList,
        setOptionList: state.setOptionList,
        setSelectedCountry: state.setSelectedCountry,
        setSelectedOption: state.setSelectedOption
    }));

    const handleOnClick = (country, list) => {
        setSelectedOption(null);
        setSelectedCountry(country);
        setOptionList(list.filter((item) => item.country !== country.country));
    };

    useEffect(() => {
        setCountryList();
    }, []);

    return (
        <>
            <div>
                {countryList.countries ? (
                    <List
                        title={"Country List"}
                        list={countryList.countries}
                        onSelect={(country) => handleOnClick(country, countryList.options)}
                        renderItem={(item) => item.country}
                    />
                ) : null}
            </div>
            {selectedCountry ? (
                <div>
                    {optionList ? (
                        <List
                            title={"Option List"}
                            list={optionList}
                            onSelect={(option) => setSelectedOption(option)}
                            renderItem={(item) => item.country}
                        />
                    ) : null}
                    <Price
                        title="Price"
                        selectedCountry={selectedCountry}
                        selectedOption={selectedOption}
                        optionsList={optionList}
                        lowerNumberOption={lowerNumberOption}
                    />
                </div>
            ) : null}
        </>
    );
};
