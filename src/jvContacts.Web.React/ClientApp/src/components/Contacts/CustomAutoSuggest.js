import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';


function renderInputComponent(inputProps) {
    const { classes, inputRef = () => { }, ref, ...other } = inputProps;

    return (
        <TextField
            fullWidth
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input,
                },
            }}
            {...other}
        />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map(part => (
                    <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
                        {part.text}
                    </span>
                ))}
            </div>
        </MenuItem>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing(2),
    },
    zIndex: {
        zIndex: theme.zIndex.modal + 200
    }
}));

function CustomAutoSuggest(props) {
    const { id, name, onChange, value, suggestions, label, placeholder} = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [state, setState] = React.useState({
    //     popper: ''
    // });

    const [stateSuggestions, setSuggestions] = React.useState([]);

    function getSuggestions(value) {
        const inputValue = deburr(value.trim()).toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;

        return inputLength === 0
            ? []
            : suggestions.filter(suggestion => {
                const keep =
                    count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

                if (keep) {
                    count += 1;
                }

                return keep;
            });
    }

    function getSuggestionValue(suggestion) {
        return suggestion.label;
    }


    const handleSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const handleSuggestionsClearRequested = () => {
        setSuggestions([]);
    };


    const autosuggestProps = {
        renderInputComponent,
        suggestions: stateSuggestions,
        onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: handleSuggestionsClearRequested,
        getSuggestionValue,
        renderSuggestion,
    };

    // const handleChange = name => (event, { newValue }) => {
    //     setState({
    //         ...state,
    //         [name]: newValue,
    //     });
    // };

    return (
        <div className={classes.root}>
            <Autosuggest
                {...autosuggestProps}
                id={id}
                inputProps={{
                    classes,
                    name: name,
                    label: label,
                    placeholder: placeholder,
                    value: value,
                    onChange: onChange,

                    inputRef: node => {
                        setAnchorEl(node);
                    },
                    InputLabelProps: {
                        shrink: true,
                    },
                }}
                theme={{
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderSuggestionsContainer={options => (
                    <Popper anchorEl={anchorEl} open={Boolean(options.children)} className={classes.zIndex}>
                        <Paper
                            square
                            {...options.containerProps}
                            style={{ width: anchorEl ? anchorEl.clientWidth : undefined }}
                        >
                            {options.children}
                        </Paper>
                    </Popper>
                )}
            />
        </div>
    );
}

export default CustomAutoSuggest;