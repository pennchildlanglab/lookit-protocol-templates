function generateProtocol(child, pastSessions) {
    /* 
     * Generate the protocol for this study.
     *
     * @param {Object} child
     *    The child currently participating in this study. Includes fields:
     *      givenName (string)
     *      birthday (Date)
     *      gender (string, 'm' / 'f' / 'o')
     *      ageAtBirth (string, e.g. '25 weeks'. One of '40 or more weeks',
     *          '39 weeks' through '24 weeks', 'Under 24 weeks', or
     *          'Not sure or prefer not to answer')
     *      additionalInformation (string)
     *      languageList (string) space-separated list of languages child is
     *          exposed to (2-letter codes)
     *      conditionList (string) space-separated list of conditions/characteristics
     *          of child from registration form, as used in criteria expression
     *          - e.g. "autism_spectrum_disorder deaf multiple_birth"
     *
     *      Use child.get to access these fields: e.g., child.get('givenName') returns
     *      the child's given name.
     *
     * @param {!Array<Object>} pastSessions
     *     List of past sessions for this child and this study, in reverse time order:
     *     pastSessions[0] is THIS session, pastSessions[1] the previous session,
     *     back to pastSessions[pastSessions.length - 1] which has the very first
     *     session.
     *
     *     Each session has the following fields, corresponding to values available
     *     in Lookit:
     *
     *     createdOn (Date)
     *     conditions
     *     expData
     *     sequence
     *     completed
     *     globalEventTimings
     *     completedConsentFrame (note - this list will include even "responses")
     *          where the user did not complete the consent form!
     *     demographicSnapshot
     *     isPreview
     *
     * @return {Object} Protocol specification for Lookit study; object with 'frames'
     *    and 'sequence' keys.
     */

    // Return a study protocol with "frames" and "sequence" fields just like when
    // defining the protocol in JSON only
    return {
        frames: {},
        sequence: []
    };
}