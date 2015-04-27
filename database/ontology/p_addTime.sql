DELIMITER $$
CREATE PROCEDURE p_addTime (
	IN _eventID INT (11),
	IN _timeID INT (11),
	IN _year VARCHAR (255),
	IN _month VARCHAR (255),
	IN _day VARCHAR (255),
	IN _hour VARCHAR (255),
	IN _minute VARCHAR (255),
	IN _second VARCHAR (255),
	IN _accurateLevel TINYINT (255),
	IN _updateTime datetime
)
BEGIN

IF EXISTS (
	SELECT
		timeID
	FROM
		time
	WHERE
		`year` = _year
		AND `month` = _month
		AND `day` = _day
		AND `hour` = _hour
		AND `minute` = _minute
		AND `second` = _second
) THEN
	
	IF EXISTS( 
		SELECT *
		FROM event_time
		WHERE 
			timeID=
				(SELECT 
						timeID 
				 FROM time 
				 WHERE  
						`year` = _year
						AND `month` = _month
						AND `day` = _day
						AND `hour` = _hour
						AND `minute` = _minute
						AND `second` = _second
				)
			AND eventID=_eventID
			) THEN
		UPDATE event_time
		SET count = count + 1,
				updateTime = _updateTime
			WHERE 
				timeID=
					(SELECT 
							timeID 
					FROM time 
					WHERE  
							`year` = _year
							AND `month` = _month
							AND `day` = _day
							AND `hour` = _hour
							AND `minute` = _minute
							AND `second` = _second
					)
				AND eventID=_eventID;
				
		
		ELSE
			INSERT INTO `event_time` (eventID, timeID, count, countRatio, updateTime)
			VALUES
			(
				_eventID,
				(
				SELECT
					timeID
				FROM
					time
				WHERE
					`year` = _year
					AND `month` = _month
					AND `day` = _day
					AND `hour` = _hour
					AND `minute` = _minute
					AND `second` = _second
				),
				1,
				-1,
				_updateTime
			) ;
			

	END IF ;

ELSE

	INSERT INTO `time` (
		`year`,
		`month`,
		`day`,
		`hour`,
		`minute`,
		`second`,
		accurateLevel,
		updateTime
	)
	VALUES
	(
		_year,
		_month,
		_day,
		_hour,
		_minute,
		_second,
		_accurateLevel,
		_updateTime
	) ; 
	INSERT INTO `event_time` (eventID, timeID, count, countRatio, updateTime)
	VALUES
	(
		_eventID,
		(
			SELECT
				timeID
			FROM
				time
			WHERE
				`year` = _year
				AND `month` = _month
				AND `day` = _day
				AND `hour` = _hour
				AND `minute` = _minute
				AND `second` = _second
		),
		1,
		-1,
		_updateTime
	) ;

END IF;


END $$
DELIMITER ;
