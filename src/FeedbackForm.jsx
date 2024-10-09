import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { useNavigate  } from 'react-router-dom';
import logo from '../src/assets/Rectangle_1.png'
import img from '../src/assets/Rectangle_12.png'
import './index.css';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconFilled': {
        color: '#fbbf24', // Yellow color
    },
    '& .MuiRating-iconHover': {
        color: '#f59e0b', // Darker yellow on hover
    },
}));

function FeedbackForm({ onSubmit }) {
    const navigate = useNavigate();
    const [foodQuality, setFoodQuality] = React.useState(2);
    const [serviceQuality, setServiceQuality] = React.useState(2);
    const [overallExperience, setOverallExperience] = React.useState(2);
    const [recommendation, setRecommendation] = React.useState('YES');
    const [suggestions, setSuggestions] = React.useState('');
    const [receiveFollowUp, setReceiveFollowUp] = React.useState(true);
    const [options, setoptions] = React.useState('');

    const handleChange = (event) => {
        setoptions(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const feedback = {
            foodQuality,
            serviceQuality,
            overallExperience,
            recommendation,
            suggestions,
            receiveFollowUp,
            options
        };
        console.log(feedback);
        onSubmit(feedback);
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center p-4 ">
        <img src={img} alt="" className="mb-4 w-32 h-auto" />
        {/* <div className="text-2xl font-bold mb-2 text-center">UNIWELL</div> */}
        <div className="text-center mb-4">
            <img src={logo} alt="" className="mb-2" />
            <div>Hello, Thanks for Visiting</div>
            <p>Please help us improve our cafe services by filling in our feedback form. Thank you!</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-4 p-4 border rounded shadow-sm">
                <div className="mb-2">How often do you visit here?</div>
                <FormControl fullWidth>
                    <Select
                        labelId="visit-frequency-label"
                        id="visit-frequency"
                        value={options}
                        label="Visit Frequency"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Regular</MenuItem>
                        <MenuItem value={20}>Occasional</MenuItem>
                        <MenuItem value={30}>First time</MenuItem>
                    </Select>
                </FormControl>
            </div>
    
            <Box sx={{ '& > legend': { mt: 2 } }} className="mb-4 p-4 border rounded shadow-sm">
                <Typography component="legend">Quality of the food</Typography>
                <StyledRating
                    name="quality-of-food"
                    value={foodQuality}
                    precision={0.5}
                    max={3}
                    onChange={(event, newValue) => setFoodQuality(newValue)}
                />
                <Typography component="legend">Service Quality</Typography>
                <StyledRating
                    name="service-quality"
                    value={serviceQuality}
                    precision={0.5}
                    max={3}
                    onChange={(event, newValue) => setServiceQuality(newValue)}
                />
                <Typography component="legend">Overall Experience</Typography>
                <StyledRating
                    name="overall-experience"
                    value={overallExperience}
                    precision={0.5}
                    max={3}
                    onChange={(event, newValue) => setOverallExperience(newValue)}
                />
            </Box>
    
            <div className="mb-4 p-4 border rounded shadow-sm">
                <div>WOULD YOU RECOMMEND OUR RESTAURANT TO OTHERS?</div>
                <RadioGroup
                    row
                    value={recommendation}
                    onChange={(event) => setRecommendation(event.target.value)}
                >
                    <FormControlLabel value="YES" control={<Radio />} label="YES" />
                    <FormControlLabel value="NO" control={<Radio />} label="NO" />
                </RadioGroup>
            </div>
    
            <div className="mb-4 p-4 border rounded shadow-sm">
                <p>Your suggestions to improve</p>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    value={suggestions}
                    onChange={(event) => setSuggestions(event.target.value)}
                    className="w-full"
                />
            </div>
    
            <div className="flex items-center mb-4 p-4 border rounded shadow-sm">
                <Checkbox
                    checked={receiveFollowUp}
                    onChange={(event) => setReceiveFollowUp(event.target.checked)}
                />
                <span>Receive personal follow up to your feedback</span>
            </div>
    
            <Button type="submit" variant="contained" className="bg-red-500 hover:bg-red-700 text-white w-full">
                SUBMIT FEEDBACK
            </Button>
        </form>
    </div>
    
    );
}

export default FeedbackForm;

