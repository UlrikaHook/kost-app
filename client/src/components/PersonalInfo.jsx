import React from "react";

export const PersonalInfo = () => {

    //states för att hantera ifyllda uppgifter
    //bör ligga i parent? Endast metoder här som anropar ändra state i parent

    return(
        <fieldset>
            <legend>Dina uppgifter</legend>
            <div className="flex-col-start-start">
                <div className="flex-row-between-start fill">
                    <div>
                        Kön
                    </div>
                    <div>
                        <label>Man<input type="radio" name="gender" value="male"/></label>
                        <label>Kvinna<input type="radio" name="gender" value="female"/></label>
                    </div>
                    <div>
                        <label>Jag är gravid<input type="checkbox" value="pregnant"/>
                        </label>
                        <label>
                            Jag är ammande<input type="checkbox" value="breastfeeding"/>
                        </label>
                    </div>
                </div>
                <div className="flex-row-start-start fill">
                    <div className="fill-twenty">
                        Ålder
                    </div>
                    <div className="fill-eighty">
                        <label>
                            18-30 år<input type="radio" name="age" value="eighteen"/>
                        </label>
                        <label>
                            31-60 år<input type="radio" name="age" value="thirtyone"/>
                        </label>
                        <label>
                            61-74 år<input type="radio" name="age" value="sixtyone"/>
                        </label>
                        <label>
                            över 75 år<input type="radio" name="age" value="seventyfive"/>
                        </label>
                    </div>
                </div>
            </div>

        </fieldset>
        );

}
