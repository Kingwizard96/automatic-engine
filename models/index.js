const user = require('./user');
const post = require('./post'); 
const comment = require('./comment');

user.hasMany(post, {
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

user.hasMany(comment, { 
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

post.belongsTo(user, {
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

post.hasMany(comment, {
    forgeinKey: 'post_id',
    onDelete: 'CASCADE'
});

comment.belongsTo(user, {
    forgeinKey: 'user_id',
    onDelete: 'CASCADE'
});

comment.belongsTo(post, {
    forgeinKey: 'post_id',
    onDelete: 'CASCADE'
});

