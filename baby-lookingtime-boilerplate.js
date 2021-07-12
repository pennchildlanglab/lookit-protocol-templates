function generateProtocol(child, pastSessions) {
    /* ------------ DEFAULT INSTRUCTIONS FROM LOOKIT ------------
     *
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

    // ------------ FRAMES ------------
    // The frames that will be in your study.  
    let frames = {
        "welcome-page": {
            "kind": "exp-lookit-text", 
            "blocks": [
                {
                    "title": "Welcome to our study!" 
                }, 
                {
                    //Edit [GOAL OF EXPERIMENT] below 
                    "text": "We are researchers from the Child Language Lab at the University of Pennsylvania. This experiment aims to [GOAL OF EXPERIMENT]. "
                }, 
                {
                    //Edit this overview as necessary
                    "text": "Thank you so much for joining the study! First, we need to make sure you have the right computer setup. Then, you are invited to read the consent document and decide whether to participate. You will then read the experiment instructions, and preview the materials. After the experiment is over, you will be asked to fill out a survey."
                }
            ], 
            "showPreviousButton": false
        }, 
        "country-note": {
            "kind": "exp-lookit-text",
            "blocks": [
                {
                    "title": "A quick note..."
                },
                {
                    "text": "Due to restrictions from the university, only participants from the United States are allowed to participate in this study at the moment. We will continue working on changing this, because we know that having a diverse group of participants is important!"
                },
                {
                    "text": "If you choose to continue, it means you have read this note and confirm that you are coming from the United States."
                }
            ],
            "showPreviousButton": false
        },
        "video-config": {
            "kind": "exp-video-config",
            "troubleshootingIntro": ""
        }, 
        "video-consent": {
            "kind": "exp-lookit-video-consent",
            "template": "consent_003",
            "PIName": "Kathryn Schuler",
            "institution": "University of Pennsylvania",
            "PIContact": "Kathryn Schuler at 215-898-6909 or the Child Language Lab at childlanglab@sas.upenn.edu",
            "purpose": "We are studying [PURPOSE OF STUDY].", //Edit [PURPOSE OF STUDY]
            "procedures": "[DESCRIPTION OF STUDY PROCEDURE]", //Edit [DESCRIPTION OF STUDY PROCEDURE]
            "payment": "[STATEMENT ABOUT BENEFITS, RISKS, AND COMPENSATION]", //Edit [STATEMENT ABOUT BENEFITS, RISKS, AND COMPENSATION]
            "datause": "Any data stored by researchers will be de-identified (your child’s personal identifying information will be removed) and may be stored for future research.",
            "gdpr": false,
            "research_rights_statement": "Participation in this study is entirely voluntary for both you and your child. Your child may decline to participate or withdraw from the study at any time without any negative consequences. If you or your child withdraw, any existing data may be kept as a record, but your data will not be part of any publications or presentations. If you have questions about your child’s rights as a research participant, you may also contact the Office of Regulatory Affairs at the University of Pennsylvania at 215-898-2614.",
            "additional_segments": [
                {
                    "title": "Confidentiality",
                    "text": "In order to keep information about your child safe, the data stored by the research team is separated from your child’s name and coded with an index number. The mapping between this index number and your child’s name will be stored separately from the data in a password-protected encrypted database. Identifiable information is never shared with anyone outside our research team."
                },
                {
                    "title": "Authorization",
                    "text": "By granting permission, you are indicating that you understand the information in this consent form, including: the risks and benefits to you and your child, that being in this study is voluntary, that you and your child choose to be in this study, and that you or your child can withdraw at any time."
                }
            ]
        },
        "testing-and-instructions": {
            "kind" : "exp-lookit-instructions", 
            "blocks": [
                {
                    "title": "Audio Testing",

                    //Edit [DESCRIPTION OF AUDIO] below
                    "text": "In the experiment, your baby will listen to audio recordings of [DESCRIPTION OF AUDIO]. To make sure that your baby can hear them well, please try playing the sample audio below.",
                    "mediaBlock": {
                        "text": "You should hear 'Ready to go?' You can adjust the volume now.",
                        "isVideo": false,
                        "sources": [
                            {
                                "src": "https://s3.amazonaws.com/lookitcontents/exp-physics-final/audio/ready.mp3",
                                "type": "audio/mp3"
                            },
                            {
                                "src": "https://s3.amazonaws.com/lookitcontents/exp-physics-final/audio/ready.ogg",
                                "type": "audio/ogg"
                            }
                        ],
                        "mustPlay": true,
                        "warningText": "Please try playing the sample audio."
                    }
                },
                {
                    //Edit [INSTRUCTIONS] below. You can add or remove instructions as necessary, 
                    //or delete this entire "Other Instructions" block if you do not need it. 
                    "title": "Other Instructions", 
                    "listblocks": [
                        {
                            "text": "[INSTRUCTIONS]" 
                        },
                        {
                            "text": "[INSTRUCTIONS]"
                        }
                    ]
                }
            ],
            "showWebcam": false,
            "nextButtonText": "Next", 
            "showPreviousButton": false
        },
        "preview": {
            "kind": "exp-lookit-stimuli-preview",
            "doRecording": true,
            "skipButtonText": "Skip preview",
            "previewButtonText": "I'd like to preview the section",
            "showPreviousButton": false,
            "blocks": [
                {
                    //Edit [DESCRIPTION] below
                    "text": "This experiment consists of [DESCRIPTION]. Your baby will [DESCRIPTION]"
                },
                {
                    //Edit [INSTRUCTIONS] below
                    "text": "[INSTRUCTIONS (e.g. Please try to hold your baby in the same position)]"
                },
                {
                    "text": "If you'd like to see the materials your baby will be shown, you can take a look ahead of time now. It's important that you preview them without your baby, so that the materials will still be new to them."
                }
            ],
            //Replace the URL below with the URL of your actual directory
            "baseDir": "https://raw.githubusercontent.com/kimberscott/placeholder-stimuli/master/",
            "videoTypes": ["webm", "mp4"],
            "audioTypes": ["mp3", "ogg"],
            //Replace the stimuli below with your actual preview stimuli and edit [CAPTION TEXT]. 
            //Add or remove stimuli as necessary. 
            "stimuli": [
                {
                    "caption": "[CAPTION TEXT]",
                    "video": "cropped_book"
                },
                {
                    "caption": "[CAPTION TEXT]",
                    "image": "square.png"
                },
                {
                    "caption": "[CAPTION TEXT]",
                    "audio": "sample_1"
                }
            ]
        }, 
        "webcam-setup": {
            "kind": "exp-video-config-quality",
            "title": "Webcam setup for the experiment",
            "introText": "We'll be analyzing how long your baby looks at the screen during the videos--but only if we can tell where that is! Please check each of the following to ensure we're able to use your video:",
            "requireItemConfirmation": true,
            "completedItemText": "Did it!",
            "instructionBlocks": [
                {
                    "text": "<strong>Make sure the webcam you're using is roughly centered</strong> relative to this monitor. ",
                    "image": {
                        "src": "https://s3.amazonaws.com/lookitcontents/website/centering.png",
                        "alt": "Example images of using centered external webcam on monitor or built-in webcam on laptop."
                    }
                },
                {
                    "text": "<strong>Turn off any other monitors</strong> connected to your computer, besides the one with the centered webcam. (If there's just one monitor, you're all set!)",
                    "image": {
                        "src": "https://s3.amazonaws.com/lookitcontents/website/monitors.png",
                        "alt": "Example images showing laptop screen turned off if using external monitor and webcam, or external monitor turned off if using built-in webcam and laptop screen."
                    }
                },
                {
                    "text": "Check the lighting by making sure you can <strong>clearly see your own eyes</strong> on the webcam view to the right. You may need to either turn on a light or reduce light coming from behind you.",
                    "image": {
                        "src": "https://s3.amazonaws.com/lookitcontents/website/lighting.png",
                        "alt": "Example images showing good lighting, room too dark, and backlit scene where eyes are not visible."
                    }
                },
                {
                    "text": "If it's practical, <strong>minimize exciting things</strong> that are visible behind or to the side of the screen--for instance, by facing a wall instead of the kitchen. (If this isn't practical for you, don't worry about it--just check the box!)",
                    "image": {
                        "src": "https://s3.amazonaws.com/lookitcontents/website/distractions.png",
                        "alt": "Example images showing a child and puppy next to the computer, versus a computer just on its own."
                    }
                },
                {
                    "text": "During the study, we’ll ask you to sit facing towards the monitor, and hold your baby on your lap. Make sure that the webcam is angled up or down enough that <strong>your baby is visible in this position</strong>. (Your face doesn't have to show up in the webcam.)"
                }
            ],
            "requireTestVideo": true,
            "showRecordMenu": true,
            "recordingInstructionText": "You should be able to see your camera view above. Please create and view a short recording to see how your setup looks. The experiment will begin on the next page."
        }, 
        "end-of-experiment": {
            "kind": "exp-lookit-text", 
            "blocks": [
                {
                    "title": "This is the end of the study.",
                    "text": "Thank you for your participation! We appreciate you and your baby's time and effort."
                },
                {
                    "text": "Please fill out the mandatory survey on the next page. In the survey, you will be able to decide how your data can be used and give us feedback. More information about this experiment and your compensation will come after the survey!"
                }
            ], 
            "showPreviousButton" : false
        },
        "exit-survey": {
            "kind" : "exp-lookit-exit-survey", 
            "debriefing": {
                "title": "Thank you!",
                "blocks": [
                    {
                        "listblocks": [
                            {
                                //Edit [DESCRIPTION OF STUDY]
                                "text": "This study investigates [DESCRIPTION OF STUDY]"  
                            },
                            {
                                //Edit [EXPLANATION]
                                "text": "We test this hypothesis by [EXPLANATION]"
                            },
                            //Add more blocks explaining the study if needed
                            {
                                //Edit [EXPLANATION]
                                "text": 'This study will help us better understand [EXPLANATION]. If you want to learn more about our research in child language development, you are more than welcome to check out our lab website: <a href="https://web.childlanglab.com/"" rel="noopener" target="_blank">The Child Language Lab</a>!'
                            },
                            {
                                "text": "We want to thank you and your child again for your participation. We will email you a $5 Amazon gift card within a week of your participation. To be eligible for compensation, you should have provided a valid consent video, and your child should meet all the eligibility criteria. You may only participate once for each eligible baby. Your baby should be clearly visible in the video consent and throughout the trials."
                            }
                        ]
                    }
                ],
                "image": {
                    "src": "https://raw.githubusercontent.com/Shengqi-Iris-Zhong/lookit-recursion-stimuli/master/img/end-pic.jpg",
                    "alt": "thank you"
                }
            }
        }
    }

    // ------------ SEQUENCE OF FRAMES ------------ 
    // The order that your frames will be in. 
    let frame_sequence = [
        "welcome-page", 
        "country-note", 
        "video-config", 
        "video-consent", 
        "testing-and-instructions", 
        "preview", 
        "webcam-setup", 
        "end-of-experiment", 
        "exit-survey"
    ]

    // This returns a study protocol with "frames" and "sequence" fields just like when defining the protocol in JSON only
    var protocol = {
        frames: frames,
        sequence: frame_sequence
    };
    return protocol;
}